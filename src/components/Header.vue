<template>

  <div>
    <section class="section gradient-banner">

      <!-- banner background-->
      <div class="shapes-container">
        <div class="shapes-container-pop-up"></div>
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
          <div class="col-md-6 order-2 order-md-1 text-center text-md-left ha-header-container animate__animated animate__lightSpeedInLeft">
            <h1 class="text-white font-weight-bold ml-5 ha-header-wemag animate__animated animate__slideInLeft animate__delay-1s">WEMag </h1>
            <h3 class="text-white font-weight-bold ha-header-wemag-ab animate__animated animate__slideInLeft animate__delay-1.5s" style="margin-left: 95px">{{ $t('WEMAG_abrev') }}</h3>
            <p class="text-white mb-3"></p>
          </div>
          <div class="col-md-6 text-center order-1 order-md-2">
          </div>
        </div>
      </div>
  </section>

    <section class="section pt-0 position-relative pull-top">
      <div class="container">
        <div class="rounded shadow bg-white ha-important-info animate__animated animate__backInUp" >
          <div class="row">
            <div class="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
              <i class="ti-archive  h1" style="color: var(--first-color) !important;"></i>
              <h3 class="mt-4 text-capitalize h5 ">{{ $t('coordinator') }}</h3>
              <p class="regular text-muted ">IPAG</p>
            </div>
            <div class="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
              <i class="ti-shine text-primary h1" style="color: var(--first-color) !important;"></i>
              <h3 class="mt-4 text-capitalize h5 " >{{ $t('participants') }}</h3>
              <p class="regular text-muted ">MBS, Vives, Haikara, US, UG, ADGS, USMBA, UH1, ARDM</p>
            </div>
            <div class="col-lg-4 col-md-12 mt-5 mt-lg-0 text-center">
              <i class="ti-time text-primary h1" style="color: var(--first-color) !important;"></i>
              <h3 class="mt-4 text-capitalize h5 ">{{ $t('important_dates') }}</h3>
                <ul class="regular text-muted ha-dates-list">
                  <li><strong>{{ $t('start_date') }} : </strong>{{ $t('15_january_2021') }}</li>
                  <li><strong>{{ $t('end_date') }}  : </strong>{{ $t('14_january_2024') }}</li>
                  <li><strong>{{ $t('kick_off_meeting') }} : </strong>{{ $t('4_february_2021') }}</li>
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
  background-color: #CE6D5177;
  padding:20px 10px;
  position: relative;
}

.ha-header-container:before{
  content: " ";
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20%;
  height: 5px;
  background-color: #EEEEEE;
}
.ha-header-container:after{
  content: " ";
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 20%;
  height: 5px;
  background-color: #EEEEEE;
}


.ha-dates-list{
  list-style: none;
  text-align: start;
}
.ha-important-info{
  padding: 20px 10px;
  border-bottom: 13px solid var(--first-color);
}

@media (max-width: 800px) {
  .ha-header-wemag{
    margin-left: 0 !important;
  }
  .ha-header-wemag-ab{
    margin-left: 0 !important;
  }
}

</style>