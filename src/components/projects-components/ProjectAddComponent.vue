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
                     v-model="name"
                     type="text"
                     class="form-control">
            </div>
            <div>
              <b-button class="btn-dark"
                        @click="cancelMethod">
                Cancel
              </b-button>
              <b-button class="btn-dark"
                        :disabled="!name"
                        @click="postMethod">
                Save
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
      name: '',
      error: null,
    }),
    methods: {
      postMethod () {
        console.log(this.projectData);
        axios.post(`${baseUrl}/projects`, {name: this.name})
          .catch(e => {
              this.error = e;
            }
          )
          .then(() => {
            this.$router.push('/main/projects');
          });
      },
      cancelMethod () {
        this.$router.push('/main/projects');
      },
    },
  };

</script>

<style scoped>

</style>
