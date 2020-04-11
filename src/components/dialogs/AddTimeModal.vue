<template>
  <div>
    <b-modal ref="addModal"
             title="Add new time elem"
             @ok="addMethod">
      <b-container>

        <label>
          Project
        </label>

        <b-form-select v-model="newTimeElem.pro_id"
                       class="mb-3">

          <b-form-select-option v-for="project in projects"
                                :key="project.id"
                                :value="project.id">
            {{ project.name }}
          </b-form-select-option>

        </b-form-select>

        <label>
          Person
        </label>

        <b-form-select v-model="newTimeElem.per_id"
                       class="mb-3">

          <b-form-select-option v-for="person in staff"
                                :key="person.id"
                                :value="person.id">
            {{ person.name }} {{ person.surname }}
          </b-form-select-option>

        </b-form-select>

        <label>
          Data
        </label>

        <b-form-datepicker class="mb-2"></b-form-datepicker>

        <label>
          Time spend
        </label>

        <b-form-timepicker v-model="newTimeElem.time"></b-form-timepicker>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
  import {eventBus} from '../../main';

  export default {
    name: 'AddTimeModal',
    data: () => (
      {
        projects: [],
        staff: [],
        selectedProject: null,
        newTimeElem: {
          per_id: '',
          pro_id: '',
          time: '',
        },
      }),
    mounted () {
      eventBus.$on('ON_ADD_TIME', data => {

        this.staff = data.staff;
        this.projects = data.projectList;

        this.showModal();
      });
    },
    methods: {
      showModal () {
        this.$refs['addModal'].show();
      },
      addMethod () {
        eventBus.$emit('ON_ADD_NEW_TIME', this.newTimeElem);
      },
    },
  };
</script>

<style scoped>

</style>
