<template>
  <div>
    <b-modal ref="addModal"
             title="Add new time elem"
             @ok="addMethod">

      <b-container>
        <h1>{{ staff.name }} {{ staff.surname }}</h1>

        <label>
          Project
        </label>

        <b-form-select v-model="newTimeElem.proId"
                       class="mb-3">

          <b-form-select-option v-for="project in projects"
                                :key="project.id"
                                :value="project.id">
            {{ project.name }}
          </b-form-select-option>
        </b-form-select>


        <label>
          Work TYpe
        </label>

        <b-form-select v-model="newTimeElem.workId"
                       onselect=""
                       class="mb-3">

          <b-form-select-option v-for="type in workType"
                                :key="type.id"
                                :value="type.id">
            {{ type.name }} {{ type.salaryMod }}
          </b-form-select-option>
        </b-form-select>

        <label>
          Data
        </label>

        <b-form-datepicker class="mb-2"></b-form-datepicker>

        <label>
          Time spend
        </label>

        <label>
          <input v-model="newTimeElem.time"
          type="number"
          class="form-control">
        </label>
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
        workType: [],
        selectedProject: null,
        newTimeElem: {

          perId: '',
          proId: '',
          workId:'',
          positionId:'',
          time: '',
          headId:'',
        },
      }),
    mounted () {
      eventBus.$on('ON_ADD_TIME', data => {

        this.staff = data.staff;
        this.newTimeElem.perId = data.staff.id;
        this.newTimeElem.positionId = data.staff.positionId;
        this.projects = data.projectList;
        this.newTimeElem.headId = data.headId;
        this.workType = data.workType;

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
