<template>
  <div>
    <div class="ha-mini-nav">
      <span>contact us</span>
    </div>
    <nav class="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0" style="border-bottom: 2px solid #EEE">
      <div class="container">
        <a class="navbar-brand ha-yas-img" href="#"><img src="../assets/logo/logo-test.png" height="80px" alt="logo"></a>
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
              <router-link class="nav-link" to="/contents">Contents</router-link>
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

nav{
  /* padding: 10px 5px !important; */
}

.ha-mini-nav{
  position: relative;
  width: 100%;
  background-color: #c8217d;
  text-align: end;
  padding: 1px 10px;
  color: white;
}

.ha-yas-img{
  position: relative;
  left: -140px;
}

</style>