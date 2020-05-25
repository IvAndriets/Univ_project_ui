<template>
  <div class="container">
    <b-container class="head">
      <h3>Staff</h3>

      <b-button :to="{path: '/main/staff/add' }">
        Add
      </b-button>
    </b-container>
    <div>
      <b-table-simple hover
                      responsive
                      outlined>
        <b-thead>
          <b-tr>
            <b-th>Name</b-th>
            <b-th>Surname</b-th>
            <b-th>Position</b-th>
            <b-th>Create at</b-th>
            <b-th>Update at</b-th>
            <b-th></b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="member in staff"
                 :key="member.id">
          <b-tr>
            <b-td>
              <router-link :to="{path:`/main/staff/${member.id}`}"
                           class="nav-link">
                {{ member.name }}
              </router-link>
            </b-td>
            <b-td>
              {{ member.surname }}
            </b-td>
            <b-td>{{ member.position }}</b-td>
            <b-td>{{ member.createAt }}</b-td>
            <b-td>{{ member.updateAt }}</b-td>
            <b-td class="deleteMod">
              <b-button @click="onDelete(member)">
                Delete
              </b-button>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <div v-if="error">
        <span> {{ error.message }} </span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {baseUrl} from '../../utils/settings';
  import {eventBus} from '../../main';

  export default {
    name: 'StaffComponent',
    data: () => (
      {
        staff: [],
        error: null,
      }
    ),
    created () {
      axios.get(`${baseUrl}/staff`)
        .then(response => (this.staff = response.data))
        .catch(e => (this.error = e));
    },
    mounted () {
      eventBus.$on('ON_DELETE_STAFF', data => {
        this.deletePerson(data);
      });
    },
    beforeDestroy () {
      eventBus.$off('ON_DELETE_STAFF');
    },
    methods: {
      onDelete (user) {
        eventBus.$emit('ON_SHOW', {source: 'staff', data: user});
      },
      deletePerson (user) {
        axios.delete(`${baseUrl}/staff/${user.id}`)
          .then(() => {
            this.staff.splice(this.staff.indexOf(user), 1);
          });
      },
    },
  };
</script>

<style>

</style>
