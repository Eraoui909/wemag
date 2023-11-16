<template>
  <div>
    <footer>
      <div class="ha-erasmus-logo">
        <a href="#"><img src="../assets/logo/erasmus.png"   alt="footer-logo"></a>
      </div>
      <div class="footer-main">

        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 m-md-auto align-self-center">
              <div class="block">
                <a href="#"><img src="../assets/logo/logo-inverse-1.png" width="250px" alt="footer-logo"></a>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <h6>{{  $t('important_links') }}</h6>
                <!-- links -->
                <ul>
                  <li>
                    <router-link to="/about">{{ $t('about_us')}}</router-link>
                  </li>
                  <li><router-link to="/activities">{{ $t('footer.activities')}}</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <h6>{{ $t('project')}}</h6>
                <!-- links -->
                <ul>
                  <li><router-link to="#">{{ $t('footer.contact_us') }}</router-link></li>
                  <li><router-link to="/partners">{{ $t('footer.partners') }}</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <h6>{{ $t('footer.links') }}</h6>
                <!-- links -->
                <ul>
                  <li><a href="#">{{ $t('press_and_media')}}</a></li>
                  <li><a href="#">{{ $t('project_results') }}</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <!--<h6>Link</h6>-->
                <!-- links -->
                <!--<ul>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                </ul>-->
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="text-center bg-dark py-4">
        <small class="text-secondary">Copyright &copy; {{ this.currentDate }}.Developed by
          <a href="https://www.linkedin.com/in/hamza-eraoui/" target="_blank">Hamza Eraoui</a>
        </small>
      </div>
    </footer>


    <!-- To Top -->
    <div class="scroll-top-to">
      <i class="ti-angle-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      currentDate: new Date().getFullYear() ,
    }
  }
}
</script>

<style scoped>

  .ha-erasmus-logo{
    width: 100%;
    background-color: #F5F5F5;
    overflow: hidden;
  }
  a:hover{
    text-decoration: none;
    color: white;
  }

</style>