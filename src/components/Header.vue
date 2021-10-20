<template>

  <div>
    <section class="section gradient-banner">
      <div class="shapes-container">
        <div class="shape" data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="100"></div>
        <div class="shape" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100"></div>
        <div class="shape" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="200"></div>
        <div class="shape" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"></div>
        <div class="shape" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="100"></div>
        <div class="shape" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="100"></div>
        <div class="shape" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300"></div>
        <div class="shape" data-aos="fade-down-right" data-aos-duration="500" data-aos-delay="200"></div>
        <div class="shape" data-aos="fade-down-right" data-aos-duration="500" data-aos-delay="100"></div>
        <div class="shape" data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="500"></div>
        <div class="shape" data-aos="fade-up-right" data-aos-duration="500" data-aos-delay="200"></div>
        <div class="shape" data-aos="fade-down-left" data-aos-duration="500" data-aos-delay="100"></div>
        <div class="shape" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0"></div>
        <div class="shape" data-aos="fade-down" data-aos-duration="500" data-aos-delay="0"></div>
        <div class="shape" data-aos="fade-up-right" data-aos-duration="500" data-aos-delay="100"></div>
        <div class="shape" data-aos="fade-down-left" data-aos-duration="500" data-aos-delay="0"></div>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 order-2 order-md-1 text-center text-md-left ha-header-container">
            <h1 class="text-white font-weight-bold ">WeMag </h1>
            <h3 class="text-white font-weight-bold ml-5">Women Entrepreneurs in the Maghreb</h3>
            <p class="text-white mb-3"></p>
          </div>
          <div class="col-md-6 text-center order-1 order-md-2">
            <!--<img class="img-fluid" src="../assets/logo/logo_small.png" height="100px" width="100px" alt="header_img">-->
          </div>
        </div>
      </div>
    </section>
    <section class="section pt-0 position-relative pull-top">
      <div class="container">
        <div class="rounded shadow bg-white ha-important-info" >
          <div class="row">
            <div class="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
              <i class="ti-archive  h1" style="color: #c8217d !important;"></i>
              <h3 class="mt-4 text-capitalize h5 ">Coordinator</h3>
              <p class="regular text-muted ">IPAG</p>
            </div>
            <div class="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
              <i class="ti-shine text-primary h1" style="color: #c8217d !important;"></i>
              <h3 class="mt-4 text-capitalize h5 " >Participants</h3>
              <p class="regular text-muted ">MBS, Vives, Haikara, US, UG, ADGS, USMBA, UH1, ARDM</p>
            </div>
            <div class="col-lg-4 col-md-12 mt-5 mt-lg-0 text-center">
              <i class="ti-time text-primary h1" style="color: #c8217d !important;"></i>
              <h3 class="mt-4 text-capitalize h5 ">Important Dates</h3>
                <ul class="regular text-muted ha-dates-list">
                  <li><strong>Start date : </strong>15 January 2021</li>
                  <li><strong>End date   : </strong>14 January 2024</li>
                  <li><strong>Kick off meeting : </strong>4 February 2021</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


</template>

<script>
export default {
  name: "Header",

}
</script>

<style scoped>

.ha-header-container{
  background-color: rgb(231 35 122 / 31%);
  padding: 10px;
}

.ha-dates-list{
  list-style: none;
  text-align: start;
}
.ha-important-info{
  padding: 20px 10px;
  border-bottom: 13px solid #c8217d;
}
</style>