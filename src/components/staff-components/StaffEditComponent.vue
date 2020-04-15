<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
          <h1>
            Persons page
          </h1>
          <div class="form-group">
            <label for="name">
              Name
            </label>
            <input id="name"
                   v-model="staff.name"
                   type="text"
                   class="form-control">
          </div>
          <div class="form-group">
            <label for="name">
              Second name
            </label>
            <input id="second_name"
                   v-model="staff.second_name"
                   type="text"
                   class="form-control">
          </div>
          <div class="form-group">
            <label for="name">
              Surname
            </label>
            <input id="surname"
                   v-model="staff.surname"
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
</template>

<script>
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';

  export default {
    name: 'StaffMemberPage',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data: () => (
      {
        staff: {
          id: '',
          name: '',
          second_name: '',
          surname: '',
        },
        e: null,
      }),
    created () {
      axios.get(`${baseUrl}/staff/${this.id}`)
        .then(response => (this.staff = response.data))
        .catch(e => (this.error = e));
    },
    methods: {
      putMethod () {
        axios.put(`${baseUrl}/staff/${this.id}`, this.staff)
          .then(() => (this.$router.push('/staff')));
      },
      cancelMethod () {
        this.$router.push('/staff');
      },
    },
  };
</script>

<style scoped>

</style>
