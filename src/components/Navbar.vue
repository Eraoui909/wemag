<template>
  <div>
    <nav class="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="../assets/logo/logo.png" height="50px" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="ti-menu"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>


            <li class="nav-item">
              <router-link class="nav-link" to="/news">News</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/project-results">Project results</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/partners">Partners</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: "Navbar",
}
</script>

<style scoped>

</style>