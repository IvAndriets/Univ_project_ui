<template>
  <div class="container">
    <b-container class="head">
      <h3>Time Sheet</h3>
      <div>
        <b-button @click="onAddTimeSheet">
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
            <b-th></b-th>
            <b-th>Period Start</b-th>
            <b-th>Period End</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="tableComp in timeSheet"
                 :key="tableComp.id">
          <b-tr>
            <b-td><router-link :to="{path:`time-sheet/${tableComp.id}`}"
            class="nav-link">
              {{ tableComp.person }}</router-link>
            </b-td>
            <b-td>{{ tableComp.salary }}</b-td>
            <b-td>{{ tableComp.pStart }}</b-td>
            <b-td>{{ tableComp.pEnd }}</b-td>
            <b-td class="deleteMod">
              <b-button @click="onDelete(tableComp)">
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
    name: 'MonthTimeSheetComponent',
    data: () => (
      {
        timeSheet: [],
        staff: [],
        error:null,
      }),
    created () {
      axios.get(`${baseUrl}/month_time_sheet`)
        .then(response => (this.timeSheet = response.data))
        .catch(e => (this.error = e));

      axios.get(`${baseUrl}/staff`)
        .then(response => (this.staff = response.data))
        .catch(e => (this.error = e));
    },
    mounted () {
      eventBus.$on('ON_DELETE_TIME_SHEET', data => this.deleteTimeSheet(data));
      eventBus.$on('ON_ADD_NEW_TIME_SHEET', data => this.addTimeSheetMethod(data));
    },
    beforeDestroy () {
      eventBus.$off('ON_DELETE_TIME_SHEET');
      eventBus.$off('ON_ADD_NEW_TIME_SHEET');
    },
    methods:{
      onAddTimeSheet () {
        eventBus.$emit('ON_ADD_TIME_SHEET', {source: 'timeSheet', staff:this.staff});
      },
      onDelete (tableComp) {
        eventBus.$emit('ON_SHOW', {source: 'timeSheet', data: tableComp});
      },
      deleteTimeSheet (tableComp) {
        axios.delete(`${baseUrl}/month_time_sheet/${tableComp.id}`)
          .then(() => {
            this.timeSheet.splice(this.timeSheet.indexOf(tableComp), 1);
          });
      },
      addTimeSheetMethod (data) {
        axios.post(`${baseUrl}/month_time_sheet`, data)
          .then(() => {
            axios.get(`${baseUrl}/month_time_sheet`)
              .then(response => (this.timeSheet = response.data))
              .catch(e => (this.error = e));
          });
      },
    },
  };
</script>

<style scoped>

</style>
