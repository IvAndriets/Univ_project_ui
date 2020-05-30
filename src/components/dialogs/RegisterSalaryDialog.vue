<template>
  <b-modal ref="addModalSl"
           title="Calculate Salary"
           @ok="addMethod">
    <b-container>
      <h1>{{ staff.name }} {{ staff.surname }}</h1>
      <label>
        Person
      </label>

      <b-form-select v-model="newSalarySheet.personId"
                     onselect=""
                     class="mb-3">

        <b-form-select-option v-for="person in staff"
                              :key="person.id"
                              :value="person.id">
          {{ person.name }} {{ person.surname }}
        </b-form-select-option>
      </b-form-select>

      <label>
        Period Start
      </label>

      <b-form-datepicker v-model="newSalarySheet.periodStart"
                         class="mb-2"></b-form-datepicker>

      <label>
        Period End
      </label>

      <b-form-datepicker v-model="newSalarySheet.periodEnd"
                         class="mb-2"></b-form-datepicker>

      <b-button @click="calculateSalary">
        Calculate
      </b-button>
      <hr>
      <b-container>
        <p>Standard: {{ sT }} days</p>
        <p>Vacation: {{ vT }} days</p>
        <p>Hospital's: {{ hT }} days</p>
        <p></p>
        <p>Salary: {{ salary }} </p>

      </b-container>
    </b-container>
  </b-modal>
</template>

<script>
  import {eventBus} from '../../main';
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';

  export default {
    name: 'RegisterSalaryDialog',
    data: () => ({
      salary: 0,
      vT:0,
      sT:0,
      hT:0,
      staff:[],
      newSalarySheet: {
        personId: '',
        periodStart: '',
        periodEnd: '',
        salary:'',
      },

    }),
    mounted () {
      eventBus.$on('ON_ADD_SALARY', data => {
        this.staff = data.staff;

        this.showModal();
      });
    },
    methods: {
      addMethod () {
        eventBus.$emit('ON_ADD_NEW_SALARY_SHEET', this.newSalarySheet);

      },
      showModal () {
        this.$refs['addModalSl'].show();
      },
      calculateSalary () {
        axios.post(`${baseUrl}/calculate`, this.newSalarySheet)
          .then((response) => {
            this.salary = response.data.salary;
            this.newSalarySheet.salary = response.data.salary;
            this.vT = response.data.vT;
            this.sT = response.data.sT;
            this.hT = response.data.hT;

          });
      },
    },
  };
</script>

<style scoped>

</style>
