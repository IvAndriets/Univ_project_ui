<template>
  <div>
    <delete-modal></delete-modal>
    <header class="navbar navbar-dark navbar-expand flex-column flex-md-row bd-navbar">
      <b-container style="display: flex; justify-content: end">
        <router-link :to="{path:'/'}"
                     class="navbar-brand mr-0 mr-md-2">
          Project For university
        </router-link>
        <div class="navbar-nav-scroll">
          <ul class="navbar-nav bd-navbar-nav flex-row">
            <li class="nav-item">
              <router-link :to="{ path: '/staff' }"
                           class="nav-link">
                /staff
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/projects' }"
                           class="nav-link">
                /projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/time-tracker' }"
                           class="nav-link">
                /time-tracker
              </router-link>
            </li>
          </ul>
        </div>
      </b-container>
    </header>
    <router-view>
    </router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
  };
</script>

<style>
  .deleteMod{
    text-align-last: right;
  }
  .head {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
  }

  .bd-navbar {
    min-height: 4rem;
    background-color: #563d7c;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, .05), inset 0 -1px 0 rgba(0, 0, 0, .1);
  }

  .flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }

  .navbar-expand {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .navbar {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: end;
    padding: .5rem 1rem;
  }
</style>
