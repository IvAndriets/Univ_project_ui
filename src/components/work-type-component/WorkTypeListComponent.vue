<template>
  <div class="container">
    <b-container class="head">
      <h3>Work Type</h3>

      <b-button :to="{path: '/main/work-type/add' }">
        Add
      </b-button>
    </b-container>
    <div>
      <b-table-simple hover
                      responsive
                      outlined>
        <b-thead>
          <b-tr>
            <b-th>Work Type</b-th>
            <b-th>Salary modificator</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="workType in workTypeList"
                 :key="workType.id">
          <b-tr>
            <b-td>
              <router-link :to="{path:`/main/work-type/${workType.id}`}"
                           class="nav-link">
                {{ workType.name }}
              </router-link>
            </b-td>
            <b-td>
              <div class="container">
                {{ workType.salaryMod }}%
              </div>
            </b-td>
            <b-th class="deleteMod">
              <b-button @click="onDelete(workType)">
                Delete
              </b-button>
            </b-th>
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
  import {eventBus} from '../../main';
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';

  export default {
    name: 'WorkTypeListComponent',
    data: () => (
      {
        workTypeList: [],
        error: null,
      }
    ),
    created () {
      axios.get(`${baseUrl}/work-type`)
        .then(response => (this.workTypeList = response.data))
        .catch(e => (this.error = e));
    },
    mounted () {
      eventBus.$on('ON_DELETE_WORK_TYPE', data => {
        this.deletePosition(data);
      });
    },
    beforeDestroy () {
      eventBus.$off('ON_DELETE_WORK_TYPE');
    },
    methods: {
      onDelete (workType) {
        eventBus.$emit('ON_SHOW', {source: 'work-type', data: workType});
      },
      deletePosition (position) {
        axios.delete(`${baseUrl}/work-type/${position.id}`)
          .then(() => {
            this.workTypeList.splice(this.workTypeList.indexOf(position), 1);
          });
      },
    },
  };
</script>

<style scoped>

</style>
