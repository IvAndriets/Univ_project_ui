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
              <router-link :to="{ path: '/main/staff' }"
                           class="nav-link">Staff
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/main/projects' }"
                           class="nav-link">Projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/main/positions' }"
                           class="nav-link">Positions
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ path: '/main/work-type' }"
                           class="nav-link">Work Type
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main"
            class="col-md-9 ml-sm-auto col-lg-10"
            style="padding: 0">

        <router-view v-if="this.$route.path != '/main' ">

        </router-view>

        <div v-else>
          <div class="jumbotron">
            <div class="container">
              <h2>
                Dictionaries
              </h2>
              <p>
                Here you can add, change or delete information about your projects, staff etc.!
              </p>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h2>Staff</h2>
                <p>Here your can view your staff</p>
                <p>
                  <b-button to="/main/staff"
                            class="btn-dark">
                    View
                  </b-button>
                </p>
              </div>
              <div class="col-md-4">
                <h2>Projects</h2>
                <p>Here you can see the projects that is raning right now</p>
                <p>
                  <b-button to="/main/projects"
                            class="btn-dark">
                    View
                  </b-button>
                </p>
              </div>
              <div class="col-md-4">
                <h2>Positions</h2>
                <p>Here you can see positions</p>
                <p>
                  <b-button to="/main/positions"
                            class="btn-dark">
                    View
                  </b-button>
                </p>
              </div>
              <div class="col-md-4">
                <h2>Work type</h2>
                <p>Here you can see tipes of timw spend on working</p>
                <p>
                  <b-button to="/main/work-type"
                            class="btn-dark">
                    View
                  </b-button>
                </p>
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
    name: 'MainPage',
  };
</script>

<style>

</style>
