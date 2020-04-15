<template>
  <div>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
            <h1>
              Add Person Form
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
            <div class="form-group">
              <label for="second_name">
                Second name
              </label>
              <input id="second_name"
                     v-model="second_name"
                     type="text"
                     class="form-control">
            </div>
            <div class="form-group">
              <label for="surname">
                Surname
              </label>
              <input id="surname"
                     v-model="surname"
                     type="text"
                     class="form-control">
            </div>
            <div>
              <b-button class="btn-dark"
                        @click="cancelMethod">
                Cancel
              </b-button>
              <b-button class="btn-dark"
                        :disabled="!name || !second_name || !surname"
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
    name: 'AddNewStaffMemberComponent',
    data: () => ({
      name: '',
      second_name: '',
      surname: '',
      error: null,
    }),
    methods: {
      postMethod () {
        axios.post(`${baseUrl}/staff`, {name: this.name, second_name: this.second_name, surname: this.surname})
          .catch(e => (this.error = e))
          .then(() => this.$router.push('/staff'));
      },
      cancelMethod () {
        this.$router.push('/staff');
      },

    },
  };
</script>

<style scoped>

</style>
