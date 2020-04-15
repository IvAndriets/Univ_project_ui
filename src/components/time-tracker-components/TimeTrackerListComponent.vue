<template>
  <div class="container">
    <b-container class="head">
      <h3>Time tracker</h3>

      <b-button @click="onAddTime">
        Add
      </b-button>
    </b-container>
    <div>
      <b-table-simple hover
                      responsive
                      outlined>
        <b-thead>
          <b-tr>
            <b-th>Surname</b-th>
            <b-th>Project name</b-th>
            <b-th>Time spend</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="timeComp in timeTracks"
                 :key="timeComp.id">
          <b-tr>
            <b-td>{{ timeComp.staff_surname }}</b-td>
            <b-td>{{ timeComp.project_name }}</b-td>
            <b-td>{{ timeComp.time }}</b-td>
            <b-td class="deleteMod">
              <b-button @click="onDelete(timeComp)">
                Delete
              </b-button>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <div v-if="error">
        <span> {{ error.message }} </span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';
  import {eventBus} from '../../main';

  export default {
    name: 'TimeTrackerComponent',
    data: () => (
      {
        timeTracks: [],
        staffList: [],
        projects: [],
        error: null,
      }
    ),
    created () {
      axios.get(`${baseUrl}/time-tracker`)
        .then(response => (this.timeTracks = response.data))
        .catch(e => (this.error = e));

      axios.get(`${baseUrl}/projects`)
        .then(response => (this.projects = response.data))
        .catch(e => (this.error = e));

      axios.get(`${baseUrl}/staff`)
        .then(response => (this.staffList = response.data))
        .catch(e => (this.error = e));

    },
    mounted () {
      eventBus.$on('ON_DELETE_TIME_TRACKER', data => this.deleteTime(data));
      eventBus.$on('ON_ADD_NEW_TIME', data => this.addTimeMethod(data));
    },
    beforeDestroy () {
      eventBus.$off('ON_DELETE_TIME_TRACKER');
      eventBus.$off('ON_ADD_NEW_TIME');

    },
    methods: {
      onDelete (timeComp) {
        eventBus.$emit('ON_SHOW', {source: 'timeTracker', data: timeComp});
      },
      deleteTime (timeComp) {
        axios.delete(`${baseUrl}/time-tracker/${timeComp.id}`)
          .then(() => {
            this.timeTracks.splice(this.timeTracks.indexOf(timeComp), 1);
          });
      },
      onAddTime () {
        eventBus.$emit('ON_ADD_TIME', {source: 'timeTracker', staff: this.staffList, projectList: this.projects});
      },
      addTimeMethod (data) {
        axios.post(`${baseUrl}/time-tracker`, data)
          .then( ()=>{
            axios.get(`${baseUrl}/time-tracker`)
              .then(response => (this.timeTracks = response.data))
              .catch(e => (this.error = e));
          });
      },
    },
  };
</script>

<style>

</style>
