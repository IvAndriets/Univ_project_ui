<template>
  <div>
    <b-modal ref="addTimeSheet"
             title="Add new time elem"
             @ok="addMethod">

      <b-container>
        <h1>{{ staff.name }} {{ staff.surname }}</h1>
        <label>
          Person
        </label>

        <b-form-select v-model="newMonthSheet.personId"
                       onselect=""
                       class="mb-3">

          <b-form-select-option v-for="person in staff"
                                :key="person.id"
                                :value="person.id">
            {{ person.name }} {{ person.surname }}
          </b-form-select-option>
        </b-form-select>

        <label>
          Period Start
        </label>

        <b-form-datepicker v-model="newMonthSheet.periodStart"
                           class="mb-2"></b-form-datepicker>

        <label>
          Period End
        </label>

        <b-form-datepicker v-model="newMonthSheet.periodEnd"
                           class="mb-2"></b-form-datepicker>

      </b-container>
    </b-modal>
  </div>
</template>

<script>
  import {eventBus} from '../../main';

  export default {
    name: 'RegisterTimeSheetDialog',
    data: () => (
      {
        staff: [],
        newMonthSheet: {
          personId: '',
          periodStart: '',
          periodEnd: '',
        },
      }
    ),
    mounted () {
      eventBus.$on('ON_ADD_TIME_SHEET', data => {
        this.staff = data.staff;
        this.showModal();
      });
    },
    methods: {
      showModal () {
        this.$refs['addTimeSheet'].show();
      },
      addMethod () {
        eventBus.$emit('ON_ADD_NEW_TIME_SHEET', this.newMonthSheet);
      },

    },
  };
</script>

<style scoped>

</style>
