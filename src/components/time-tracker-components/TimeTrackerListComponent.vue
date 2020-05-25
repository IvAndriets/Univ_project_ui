<template>
  <div class="container">
    <b-container class="head">
      <h3>Time tracker</h3>
      <div>
        <b-button @click=" filterHidden = !filterHidden">
          Filter
        </b-button>
        <b-button @click="onAddTime">
          Add
        </b-button>
      </div>
    </b-container>
    <b-container v-if="filterHidden"
                 class="border border-grey"
                 style="padding: 16px; display: flex; justify-content: space-between">
      <b-form inline>
        <b-form-select v-model="paramsFilter.user"
                       class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-select-option :value="''">
            All users
          </b-form-select-option>

          <b-form-select-option v-for="person in staffList"
                                :key="person.id"
                                :value="person.id">
            {{ person.name }} {{ person.surname }}
          </b-form-select-option>
        </b-form-select>
        <b-form-select v-model="paramsFilter.project"
                       class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-select-option :value="''">
            All projects
          </b-form-select-option>

          <b-form-select-option v-for="project in projects"
                                :key="project.id"
                                :value="project.id">
            {{ project.name }}
          </b-form-select-option>
        </b-form-select>
        <b-form-select v-model="paramsFilter.workType"
                       class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-select-option :value="''">
            All work-types
          </b-form-select-option>

          <b-form-select-option v-for="workType in workTypeList"
                                :key="workType.id"
                                :value="workType.id">
            {{ workType.name }}
          </b-form-select-option>
        </b-form-select>
        <b-form-datepicker v-model="paramsFilter.date1"
                           class="mb-2 mr-sm-2 mb-sm-0"></b-form-datepicker>
        <b-form-datepicker v-model="paramsFilter.date2"
                           class="mb-2 mr-sm-2 mb-sm-0"></b-form-datepicker>
      </b-form>
      <div>
        <b-button @click="clear">
          Clear
        </b-button>
        <b-button @click="applyFilter">
          Apply
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
        <b-tbody v-for="timeComp in timeTracks"
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
  import {removeFalsyValues} from '../../utils/utils';

  export default {
    name: 'TimeTrackerComponent',
    data: () => (
      {
        filterHidden: false,
        timeTracks: [],
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

      this.paramsFilter = {
        ...this.paramsFilter,
        ...this.$router.currentRoute.query,
      };

      this.getTimeTrackerData();

      axios.get(`${baseUrl}/projects`)
        .then(response => (this.projects = response.data))
        .catch(e => (this.error = e));

      axios.get(`${baseUrl}/staff`)
        .then(response => (this.staffList = response.data))
        .catch(e => (this.error = e));

      axios.get(`${baseUrl}/work-type`)
        .then(response => (this.workTypeList = response.data))
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
          .then(() => {
            axios.get(`${baseUrl}/time-tracker`)
              .then(response => (this.timeTracks = response.data))
              .catch(e => (this.error = e));
          });
      },
      getTimeTrackerData () {

        const clearedParams = removeFalsyValues({...this.paramsFilter});

        axios.get(`${baseUrl}/time-tracker`, {
          params: clearedParams,
        })
          .then(response => (this.timeTracks = response.data))
          .catch(e => (this.error = e));

      },
      clear () {
        Object.keys(this.paramsFilter).forEach(k => (this.paramsFilter[k] = ''));
        this.$router.push({query: {}});
        this.getTimeTrackerData();
      },
      applyFilter () {
        this.$router.push({query: removeFalsyValues({...this.paramsFilter})});
        this.getTimeTrackerData();
      },
    },
  };
</script>

<style>
  .pad {
    margin-left: 10px;
    margin-right: 10px;
  }

</style>
