<template>
  <div>
    <b-modal ref="delete-modal"
             title="Delete confirmation"
             @ok="deleteMethod">
      <p>Are you sure to delete this?</p>
    </b-modal>
  </div>
</template>

<script>
  import {eventBus} from '../../main';

  export default {
    name: 'DeleteModal',
    data: () => (
      {
        someUrl: '',
        deleteData: null,
      }
    ),
    mounted () {
      eventBus.$on('ON_SHOW', data => {
        this.deleteData = data;
        this.showModel();
      });
    },
    methods: {
      deleteMethod () {
        if (this.deleteData && this.deleteData.source === 'staff') {
          eventBus.$emit('ON_DELETE_STAFF', this.deleteData.data);
        } else if (this.deleteData && this.deleteData.source === 'projects') {
          eventBus.$emit('ON_DELETE_PROJECT', this.deleteData.data);
        } else if (this.deleteData && this.deleteData.source === 'timeTracker') {
          eventBus.$emit('ON_DELETE_TIME_TRACKER', this.deleteData.data);
        } else if (this.deleteData && this.deleteData.source === 'positions') {
          eventBus.$emit('ON_DELETE_POSITIONS', this.deleteData.data);
        } else if (this.deleteData && this.deleteData.source === 'work-type') {
          eventBus.$emit('ON_DELETE_WORK_TYPE', this.deleteData.data);
        } else if (this.deleteData && this.deleteData.source === 'timeSheet') {
          eventBus.$emit('ON_DELETE_TIME_SHEET', this.deleteData.data);
        } else if (this.deleteData && this.deleteData.source === 'salaryTable') {
          eventBus.$emit('ON_DELETE_SALARY', this.deleteData.data);
        }
      },
      showModel () {
        this.$refs['delete-modal'].show();
      },
    },
  };
</script>

<style scoped>

</style>
