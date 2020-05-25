<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-ms-offset-3">
          <h1>
            Calculate salary
          </h1>
          <div class="form-group">
            <label>
              Project
            </label>
            <b-form-select v-model="findTime.pro_id"
                           class="mb-3">

              <b-form-select-option v-for="project in projects"
                                    :key="project.id"
                                    :value="project.id">
                {{ project.name }}
              </b-form-select-option>
            </b-form-select>
          </div>
          <div class="form-group">
            <label>
              Person
            </label>
            <b-form-select v-model="findTime.per_id"
                           class="mb-3">

              <b-form-select-option v-for="person in persons"
                                    :key="person.id"
                                    :value="person.id">
                {{ person.name + " " + person.surname }}
              </b-form-select-option>
            </b-form-select>
          </div>
          <div class="form-group">
            <b-form-datepicker v-model="findTime.periodStart"
                               class="mb-2"></b-form-datepicker>
          </div>
          <div class="form-group">
            <b-form-datepicker v-model="findTime.periodStart"
                               class="mb-2"></b-form-datepicker>
          </div>
          <b-button class="btn-dark">
            Calculate
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
    name: 'CalculatorComponent',
    data: () => ({
        persons: [],
        projects: [],
        findTime: {
          per_id: '',
          pro_id: '',
          periodStart: '',
          periodEnd: '',
        },
      }
    ),
    created () {
      axios.get(`${baseUrl}/projects`)
        .then(response => (this.projects = response.data))
        .catch(e => (this.error = e));

      axios.get(`${baseUrl}/staff`)
        .then(response => (this.persons = response.data))
        .catch(e => (this.error = e));
    },
  };
</script>

<style scoped>

</style>
