<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
          <h1>
            Add new Person
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
            <label for="surname">
              Surname
            </label>
            <input id="surname"
                   v-model="surname"
                   type="text"
                   class="form-control">
          </div>
          <div class="form-group">
            <label for="name">
              Position
            </label>
            <b-form-select v-model="position"
                           class="mb-3">
              <b-form-select-option v-for="position in positions"
                                    :key="position.id"
                                    :value="position.id">
                {{ position.name }}
              </b-form-select-option>
            </b-form-select>
          </div>
          <div>
            <b-button class="btn-dark"
                      @click="cancelMethod">
              Cancel
            </b-button>
            <b-button class="btn-dark"
                      :disabled="!name || !position || !surname"
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
    name: 'AddNewStaffMemberComponent',
    data: () => ({
      name: '',
      surname: '',
      position:'',
      error: null,
      positions: [],
    }),
    created () {
      axios.get(`${baseUrl}/positions`)
        .then(response => (this.positions = response.data))
        .catch(e => (this.error = e));
    },
    methods: {
      postMethod () {
        axios.post(`${baseUrl}/staff`, {name: this.name, position: this.position, surname: this.surname})
          .catch(e => (this.error = e))
          .then(() => this.$router.push('/main/staff'));
      },
      cancelMethod () {
        this.$router.push('/main/staff');
      },

    },
  };
</script>

<style scoped>

</style>
