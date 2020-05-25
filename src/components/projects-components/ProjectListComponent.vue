<template>
  <div class="container">
    <b-container class="head">
      <h3>Projects</h3>

      <b-button :to="{path: '/main/projects/add' }">
          Add
      </b-button>
    </b-container>
    <div>
      <b-table-simple hover
                      responsive
                      outlined>
        <b-thead>
          <b-tr>
            <b-th>Name</b-th>
            <b-th>Create at</b-th>
            <b-th>Update at</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="project in projects"
                 :key="project.id">
          <b-tr>
            <b-td>
              <router-link :to="{path:`/main/projects/${project.id}`}"
                           class="nav-link">
                {{ project.name }}
              </router-link>
            </b-td>
            <b-td>{{ project.createAt }}</b-td>
            <b-td>{{ project.updateAt }}</b-td>
            <b-td class="deleteMod">
              <b-button @click="onDelete(project)">
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
    name: 'ProjectComponent',
    data: () => (
      {
        projects: [],
        error: null,
      }
    ),
    created () {
      axios.get(`${baseUrl}/projects`)
        .then(response => (this.projects = response.data))
        .catch(e => (this.error = e));
    },
    mounted () {
      eventBus.$on('ON_DELETE_PROJECT', data => {
        this.deleteProject(data);
      });
    },
    beforeDestroy () {
      eventBus.$off('ON_DELETE_PROJECT');
    },
    methods: {
      onDelete (project) {
        eventBus.$emit('ON_SHOW', {source: 'projects', data: project});
      },
      deleteProject (project) {
        axios.delete(`${baseUrl}/projects/${project.id}`)
          .then(() => {
            this.projects.splice(this.projects.indexOf(project), 1);
          });
      },
    },
  };
</script>

<style scoped>
</style>
