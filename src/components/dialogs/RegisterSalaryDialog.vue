<template>
  <b-modal ref="addModal"
           title="Calculate Slary"
           @ok="addMethod">

  </b-modal>
</template>

<script>
  import {eventBus} from '../../main';

  export default {
    name: 'RegisterSalaryDialog',
    data: () => ({
      salary:null,
      timeSheet:[],
      prevYear:[],

    }),
    mounted () {
      eventBus.$on('ON_ADD_SALARY',data=>{
        this.salary = data.salary;
        this.timeSheet = data.timeSheet;
        this.prevYear = data.prevYear;

        this.showModal();
      });
    },
    methods:{
      addMethod(){

      },
      showModal () {
        this.$refs['addModal'].show();
      },
    },
  };
</script>

<style scoped>

</style>
