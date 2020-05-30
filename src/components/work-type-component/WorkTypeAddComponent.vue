<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
          <h3>
            Add new Work Type
          </h3>
          <div class="form-group">
            <label for="name">
              Name
            </label>
            <input id="name"
                   v-model="name"
                   type="text"
                   class="form-control">
          </div>
          <div class="form-group">
            <label for="surname">
              Salary mod in percent
            </label>
            <input id="surname"
                   v-model="salary"
                   type="number"
                   class="form-control">
          </div>
          <div>
            <b-button class="btn-dark"
                      @click="cancelMethod">
              Cancel
            </b-button>
            <b-button class="btn-dark"
                      :disabled="!name || !salary"
                      @click="postMethod">
              Save
            </b-button>

          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';

  export default {
    name: 'WorkTypeAddComponent',
    data: () => ({
      name: '',
      salary: '',
      error: null,
    }),
    methods: {
      postMethod () {
        axios.post(`${baseUrl}/work-type`, {name: this.name, salary: this.salary})
          .catch(e => (this.error = e))
          .then(() => this.$router.push('/main/work-type'));
      },
      cancelMethod () {
        this.$router.push('/main/work-type');
      },

    },
  };
</script>

<style scoped>

</style>
