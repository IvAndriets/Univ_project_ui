<template>
  <div>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
            <h1>
              Add new Project
            </h1>
            <div class="form-group">
              <label for="name">
                Name
              </label>
              <input id="name"
                     v-model="project.name"
                     type="text"
                     class="form-control">
            </div>
            <div class="form-group">
              <label for="name">
                Rate
              </label>
              <input id="second_name"
                     v-model="project.rate"
                     type="text"
                     class="form-control">
            </div>
            <b-button class="btn-dark"
                      @click="cancelMethod">
              Cancel
            </b-button>
            <b-button class="btn-dark"
                      @click="putMethod">
              Save
            </b-button>
          </div>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';

  export default {
    name: 'ProjectPage',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data: () => (
      {
        project: {
          id: '',
          name: '',
          rate: '',
        },
        e: null,
      }),
    created () {
      axios.get(`${baseUrl}/projects/${this.id}`)
        .then(response => (this.project = response.data))
        .catch(e => (this.error = e));
    },
    methods: {
      putMethod () {
        axios.put(`${baseUrl}/projects/${this.id}`, this.project)
          .then(() => (this.$router.push('/main/projects')));
      },
      cancelMethod () {
        this.$router.push('/main/projects');
      },
    },
  };
</script>

<style scoped>

</style>
