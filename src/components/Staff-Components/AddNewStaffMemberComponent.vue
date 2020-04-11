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
                     v-model="personData.name"
                     type="text"
                     class="form-control">
            </div>
            <div class="form-group">
              <label for="second_name">
                Second name
              </label>
              <input id="second_name"
                     v-model="personData.second_name"
                     type="text"
                     class="form-control">
            </div>
            <div class="form-group">
              <label for="surname">
                Surname
              </label>
              <input id="surname"
                     v-model="personData.surname"
                     type="text"
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

  export default {
    name: 'AddNewStaffMemberComponent',
    data: () => ({
      personData: {
        name: '',
        second_name: '',
        surname: '',
      },
      error: null,
    }),
    methods: {
      postMethod () {
        console.log(this.personData);
        axios.post('http://localhost:5000/staff', this.personData)
          .catch(e => {
              this.error = e;
            }
          )
          .then(() => {
            this.$router.push('/staff');
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
