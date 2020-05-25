<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
          <h1>
            Work type page
          </h1>
          <div class="form-group">
            <label for="name">
              Name
            </label>
            <input id="name"
                   v-model="workType.name"
                   type="text"
                   class="form-control">
          </div>
          <div class="form-group">
            <label for="name">
              Salary modifire in percents
            </label>
            <input id="second_name"
                   v-model="workType.salaryMod"
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
    name: 'WorkTypeEditComponent',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data: () => (
      {
        workType: {
          id: '',
          name: '',
          salaryMod: '',
        },
        e: null,
      }),
    created () {
      axios.get(`${baseUrl}/work-type/${this.id}`)
        .then(response => (this.workType = response.data))
        .catch(e => (this.error = e));
    },
    methods: {
      putMethod () {
        console.log(this.workType);
        axios.put(`${baseUrl}/work-type/${this.id}`, this.workType)
          .then(() => (this.$router.push('/main/work-type')));
      },
      cancelMethod () {
        this.$router.push('/main/work-type');
      },
    },
  };
</script>

<style scoped>

</style>
