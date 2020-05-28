<template>
  <div style="height: 100%">
    <delete-modal></delete-modal>
    <add-time-modal></add-time-modal>
    <add-time-sheet></add-time-sheet>
    <add-salary></add-salary>
    <header class="navbar navbar-expand-md navbar-dark bg-dark">
      <router-link :to="{path:'/'}"
                   class="navbar-brand"
                   style="min-width: 16.666667%;">
        My project
      </router-link>
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ path: '/main' }"
                         class="nav-link">Dictionaries
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/salary-calculator' }"
                         class="nav-link">Salary Calculator
            </router-link>
          </li>

        </ul>
      </div>
    </header>
    <router-view v-if="this.$route.path != '/' ">

    </router-view>

    <div v-else>
      <div class="jumbotron">
        <div class="container">
          <h2>
            My project
          </h2>
          <p>
            It's my project made for university on 11 them!
          </p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Dictionaries</h2>
            <p>Here your can view information that used for salary calculating!</p>
            <p>
              <b-button to="/main/staff"
                        class="btn-dark">
                View
              </b-button>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Salary calculator</h2>
            <p>Here you can calculate salary!</p>
            <p>
              <b-button to="/main/projects"
                        class="btn-dark">
                View
              </b-button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {},
  };
</script>

<style>
  .deleteMod {
    text-align-last: right;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
  }

  .nav-link {
    padding: .5rem;
    color: #333;
  }

  html{
    height: 100%;
  }
  body{
    height: 100%;
  }

</style>
