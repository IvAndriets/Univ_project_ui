<template>
  <div>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
            <h1>
              Add Project Form
            </h1>
            <div class="form-group">
              <label for="name">
                Name
              </label>
              <input id="name"
                     v-model="projectData.name"
                     type="text"
                     class="form-control">
            </div>
            <div class="form-group">
              <label for="name">
                Rate
              </label>
              <label for="rate">

              </label>
              <input id="rate"
                     v-model="projectData.rate"
                     type="number"
                     class="form-control">
            </div>
            <div>
              <b-button class="btn-dark"
                        @click="postMethod">
                Add
              </b-button>
              <b-button class="btn-dark"
                        @click="cancelMethod">
                Cancel
              </b-button>
            </div>
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
    name: 'AddProjectPage',
    data: () => ({
      projectData: {
        id: '',
        name: '',
        rate: '',
      },
      error: null,
    }),
    methods: {
      postMethod () {
        console.log(this.projectData);
        axios.post(`${baseUrl}/projects`, this.projectData)
          .catch(e => {
              this.error = e;
            }
          )
          .then(() => {
            this.$router.push('/projects');
          });
      },
      cancelMethod () {
        this.$router.push('/projects');
      },
    },
  };

</script>

<style scoped>

</style>
