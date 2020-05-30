<template>
  <div>
    <div class="container">
      <b-container class="head">
        <h3>Salary Table</h3>
        <div>
          <b-button @click="onAdd">
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
              <b-th>Person</b-th>
              <b-th>Salary</b-th>
              <b-th>Period Start</b-th>
              <b-th>Period End</b-th>
              <b-th></b-th>
            </b-tr>
          </b-thead>
          <b-tbody v-for="comp in salarySheet"
                   :key="comp.id">
            <b-tr>
              <b-td>{{ comp.surname }}</b-td>
              <b-td>{{ comp.salary }}</b-td>
              <b-td>{{ comp.periodStart }}</b-td>
              <b-td>{{ comp.periodEnd }}</b-td>
              <b-td class="deleteMod">
                <b-button @click="onDelete(comp)">
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
  </div>
</template>

<script>
  import {eventBus} from '../../main';
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';

  export default {
    name: 'SalaryTableComponent',
    data: () => ({
      salarySheet: [],
      staff:[],
      error:null,
    }),
    created () {
      axios.get(`${baseUrl}/salary-table`)
        .then(response => {this.salarySheet = response.data;})
        .catch(e => {
          this.error = e;
        });
      axios.get(`${baseUrl}/staff`)
        .then(response => {this.staff = response.data;})
        .catch(e => {
          this.error = e;
        });
    },
    mounted () {
      eventBus.$on('ON_DELETE_SALARY', data=>this.deleteMethod(data));
      eventBus.$on('ON_ADD_NEW_SALARY_SHEET', data=>this.addSalary(data));
    },
    beforeDestroy () {
      eventBus.$off('ON_DELETE_SALARY');
      eventBus.$off('ON_ADD_NEW_SALARY_SHEET');
    },
    methods: {
      onDelete (comp) {
        eventBus.$emit('ON_SHOW', {source: 'salaryTable', data: comp});
      },
      onAdd () {
        eventBus.$emit('ON_ADD_SALARY', {source: 'salaryTable', staff:this.staff});
      },
      deleteMethod(comp){
        axios.delete(`${baseUrl}/salary-table/${comp.id}`)
          .then(() => {
            this.salarySheet.splice(this.salarySheet.indexOf(comp), 1);
          });
      },
      addSalary(data){
        axios.post(`${baseUrl}/salary-table`, data)
          .then(() => {
            axios.get(`${baseUrl}/salary-table`)
              .then(response => {this.salarySheet = response.data;})
              .catch(e => {this.error = e;});
          });

      },
    },
  };
</script>

<style scoped>

</style>
