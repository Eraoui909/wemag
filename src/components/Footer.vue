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
                <a href="#"><img src="../assets/logo/logo-test.png" width="300px" alt="footer-logo"></a>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <h6>Important Links</h6>
                <!-- links -->
                <ul>
                  <li>
                      <router-link to="/about">About WEMag</router-link>
                  </li>
                  <li><router-link to="/activities">Activities</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <h6>Project Contact</h6>
                <!-- links -->
                <ul>
                  <li><router-link to="#">Contact Us</router-link></li>
                  <li><router-link to="/partners">Partners</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <h6>Link</h6>
                <!-- links -->
                <ul>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
              <div class="block-2">
                <!-- heading -->
                <h6>Link</h6>
                <!-- links -->
                <ul>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                  <li><a href="#">link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center bg-dark py-4">
        <small class="text-secondary">Copyright &copy; 2021. Designed &amp; Developed by
          <a href="#">Hamza Eraoui</a>
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
  name: "Footer"
}
</script>

<style scoped>

  .ha-erasmus-logo{
    width: 100%;
    background-color: rgb(200 200 200 / 19%);
    overflow: hidden;
  }

</style>