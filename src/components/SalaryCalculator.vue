<template>
  <div class="container-fluid"
       style="height: calc(100% - 56px)">
    <div class="row"
         style="height: 100%">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky"
             style="margin-top: 20px">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link :to="{ path: '/salary-calculator/calculator' }"
                           class="nav-link">Calculator
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/salary-calculator/time-sheet' }"
                           class="nav-link">Time-Sheet
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main"
            class="col-md-9 ml-sm-auto col-lg-10"
            style="padding: 0">

        <router-view v-if="this.$route.path !== '/salary-calculator' ">

        </router-view>

        <div v-else>
          <div class="jumbotron">
            <div class="container">
              <h2>
                Salary calculator
              </h2>
              <p>
                Here you can calculate salary for your employee!
              </p>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h2>Calculator</h2>
                <p>Here you calculate salary.</p>
                <p><b-button to="/salary-calculator/calculator"
                             class="btn-dark">
                  View
                </b-button></p>
              </div>
              <div class="col-md-4">
                <h2>Time Tracker</h2>
                <p>here you watch how many time your employee spend working.</p>
                <p><b-button to="/salary-calculator/calculator"
                             class="btn-dark">
                  View
                </b-button></p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Test',
  };
</script>

<style scoped>

</style>
