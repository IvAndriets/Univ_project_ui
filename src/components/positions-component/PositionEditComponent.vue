<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
          <h1>
            Position page
          </h1>
          <div class="form-group">
            <label for="name">
              Name
            </label>
            <input id="name"
                   v-model="position.name"
                   type="text"
                   class="form-control">
          </div>
          <div class="form-group">
            <label for="name">
              Salary per hover
            </label>
            <input id="second_name"
                   v-model="position.salary"
                   type="number"
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
</template>

<script>
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';

  export default {
    name: 'PositionEditComponent',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data: () => (
      {
        position: {
          id: '',
          name: '',
          salary: 0,
        },
        e: null,
      }),
    created () {
      axios.get(`${baseUrl}/positions/${this.id}`)
        .then(response => (this.position = response.data))
        .catch(e => (this.error = e));
    },
    methods: {
      putMethod () {
        axios.put(`${baseUrl}/positions/${this.id}`, this.position)
          .then(() => (this.$router.push('/main/positions')));
      },
      cancelMethod () {
        this.$router.push('/main/positions');
      },
    },
  };
</script>

<style scoped>

</style>
