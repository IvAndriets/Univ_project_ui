<template>
  <div class="container">
    <b-container class="head">
      <h3>Personal Sheet</h3>
      <div>
        <b-button @click="onAddTime">
          Add
        </b-button>
      </div>
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
            <b-th>Work type</b-th>
            <b-th>Created at</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="timeComp in monthSheet"
                 :key="timeComp.id">
          <b-tr>
            <b-td>{{ timeComp.staffSurname }}</b-td>
            <b-td>{{ timeComp.projectName }}</b-td>
            <b-td>{{ timeComp.time }}</b-td>
            <b-td>{{ timeComp.workType }}</b-td>
            <b-td>{{ new Date(timeComp.createAt).toLocaleDateString() }} {{ new
              Date(timeComp.createAt).toLocaleTimeString() }}
            </b-td>
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
    name: 'MonthSheetComponent',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data: () => (
      {
        filterHidden: false,
        person:'',
        monthSheet: [],
        staffList: [],
        projects: [],
        workTypeList: [],
        paramsFilter: {
          user: '',
          project: '',
          workType: '',
          date1: '',
          date2: '',
        },
        error: null,
      }
    ),
    created () {
      axios.get(`${baseUrl}/month_time_sheet/${this.id}`)
        .then((response) =>{
          this.monthSheet = response.data.sheet;
          axios.get(`${baseUrl}/staff/${response.data.timeSheet.personId}`)
            .then(response => (this.staffList = response.data))
            .catch(e => (this.error = e));
        })
        .catch(e => (this.error = e));

      axios.get(`${baseUrl}/projects`)
        .then(response => (this.projects = response.data))
        .catch(e => {this.error = e;});



      axios.get(`${baseUrl}/work-type`)
        .then(response => {this.workTypeList = response.data;})
        .catch(e => {this.error = e;});
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
            this.monthSheet.splice(this.monthSheet.indexOf(timeComp), 1);
          });
      },
      onAddTime () {
        eventBus.$emit('ON_ADD_TIME', {
          source: 'timeTracker',
          staff: this.staffList,
          projectList: this.projects,
          headId: this.id,
          workType: this.workTypeList,
        });
      },
      addTimeMethod (data) {
        axios.post(`${baseUrl}/time-tracker`, data)
          .then(() => {
            axios.get(`${baseUrl}/month_time_sheet/${this.id}`)
              .then(response => {this.monthSheet = response.data.sheet;
              console.log(response.data);})
              .catch(e => {this.error = e;});
          });
      },
    },
  };
</script>

<style scoped>

</style>
