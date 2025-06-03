<template>
  <div>
    <div class="ha-mini-nav" >
      <small><a href="mailto:asmae.diani@usmba.ac.ma,Asmaediani@hotmail.com">{{ $t('contact_us') }}</a></small>
      <small>
        <select class=" ha-custom-select" v-model="lang" @change="handleChange($event)" >
          <option value="en">{{ $t('en') }}</option>
          <option value="fr">{{ $t('fr') }}</option>
          <option value="ar">{{ $t('ar') }}</option>
        </select>
      </small>
    </div>
    <nav class="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0" dir="ltr" style="border-bottom: 2px solid #EEE">
      <div class=" ha-nav-contanier">
        <a class="navbar-brand ha-yas-img" style="margin-left:20px;" href="#"><img src="../assets/logo/wemag-logo.png" height="60px" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="ti-menu"></span>
        </button>
        <div class="collapse navbar-collapse" style="text-align: center" id="navbarNav">
          <ul class="navbar-nav ml-auto">

            <li class="nav-item">
              <router-link class="nav-link" to="/">{{ $t('home') }}</router-link>
            </li>


            <li class="nav-item">
              <router-link class="nav-link" to="/about">{{ $t('about_us') }}</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/activities">{{ $t('activities') }}</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/press-and-media">{{ $t('press_and_media') }}</router-link>
            </li>

            <li class="nav-item">
              
              <div class="main-nav dropdown"  >
                <router-link class="nav-link" to="#">{{ $t('project_results') }}</router-link>
                <div class="dropdown-menu">
                  <span>
                    <router-link class="nav-link" to="/projects-delivrables">{{ $t('deliverables') }}</router-link>
                  </span>
                  <span >
                    <router-link class="nav-link" to="/scientific-valorization">{{ $t('valorization') }}</router-link>
                  </span>
                  <span >
                    <router-link class="nav-link" to="/multiplier-events">{{ $t('multiplier_events') }}</router-link>
                  </span>
                  </div>
              </div>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/partners">{{ $t('partners') }}</router-link>
            </li>
          </ul>
        </div>
        <a class="navbar-brand ha-yas-img" href="#">
        </a>
        <a class="navbar-brand ha-yas-img" href="#">
          <img src="../assets/logo/erasmus.png" height="60px" alt="logo">
        </a>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: "Navbar",
  data: function () {
    const lang = localStorage.getItem("lang") || 'en';
    return {
      lang: lang
    }
  },
  methods:{
    handleChange(event){
      localStorage.setItem("lang",event.target.value);
      window.location.reload();
    }
  }

}
</script>

<style scoped>

nav{
  /* padding: 10px 5px !important; */
  padding: 10px auto;
}

.ha-mini-nav{
  position: relative;
  width: 100%;
  background-color: var(--first-color);
  text-align: end;
  padding: 1px 10px;
  color: white;
}
.ha-mini-nav a:hover{
  color: white !important;
  text-decoration: none;
}


.ha-custom-select{
  width: 80px;
  padding: 5px;
  margin: 0 10px;
  background-color: var(--first-color);
  color: white;
  border: none;
}
.ha-nav-contanier{
  margin: 10px auto;
}
@media only screen and (min-width: 990px) {
  .ha-nav-contanier{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 10px auto;
  }
}


</style>