<template>
  <div>
    <b-modal ref="addTimeSheet">
      Something
    </b-modal>
  </div>
</template>

<script>
  import {eventBus} from '../../main';

  export default {
    name: 'RegisterTimeSheetDialog',
    data: () => (
      {
        something: null,
      }
    ),
    mounted () {
      eventBus.$on('ON_ADD_TIME_SHEET', data => {
        this.something = data;
        console.log('###');
        this.showModal();
      });
    },
    methods: {
      showModal () {
        this.$refs['addTimeSheet'].show();
      },
      addMethod () {
        eventBus.$emit('ON_ADD_NEW_TIME_SHEET', {});
      },

    },
  };
</script>

<style scoped>

</style>
