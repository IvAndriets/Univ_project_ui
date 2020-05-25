<template>
  <div class="container">
    <b-container class="head">
      <h3>Positions</h3>

      <b-button :to="{path: '/main/positions/add' }">
        Add
      </b-button>
    </b-container>
    <div>
      <b-table-simple hover
                      responsive
                      outlined>
        <b-thead>
          <b-tr>
            <b-th>Position</b-th>
            <b-th>Salary</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="position in positionList"
                 :key="position.id">
          <b-tr>
            <b-td>
              <router-link :to="{path:`/main/positions/${position.id}`}"
                           class="nav-link">
                {{ position.name }}
              </router-link>
            </b-td>
            <b-td>{{ position.salary }}</b-td>
            <b-th class="deleteMod">
              <b-button @click="onDelete(position)">
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
    name: 'PositionsListComponent',
    data: () => (
      {
        positionList: [],
        error: null,
      }
    ),
    created () {
      axios.get(`${baseUrl}/positions`)
        .then(response => (this.positionList = response.data))
        .catch(e => (this.error = e));
    },
    mounted () {
      eventBus.$on('ON_DELETE_POSITIONS', data => {
        this.deletePosition(data);
      });
    },
    beforeDestroy () {
      eventBus.$off('ON_DELETE_POSITIONS');
    },
    methods: {
      onDelete (position) {
        eventBus.$emit('ON_SHOW', {source: 'positions', data: position});
      },
      deletePosition (position) {
        axios.delete(`${baseUrl}/positions/${position.id}`)
          .then(() => {
            this.positionList.splice(this.positionList.indexOf(position), 1);
          });
      },
    },
  };
</script>

<style scoped>

</style>
