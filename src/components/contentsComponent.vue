<template>
  <div class="ha-context">
    <!-- <div class="ha-title">
      <h1><span>C</span>ontents</h1>
    </div> -->

    <section class="privacy section pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <nav class="privacy-nav">
              <ul>
                <li><a class="nav-link scrollTo" href="#Context">{{ $t('context') }}</a></li>
                <li><a class="nav-link scrollTo" href="#Goal_and_Objectives">{{ $t('goals_and_objectives') }}</a></li>
                <li><a class="nav-link scrollTo" href="#Activities&Workpackages">{{ $t('activities_and_workpackages') }}</a></li>
                <li><a class="nav-link scrollTo" href="#Deliverables">{{ $t('deliverables') }}</a></li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-9" style="text-align: start">
            <div class="block">
              <!-- Context -->
              <div id="Context" class="policy-item">
                <div class="title">
                  <h3>{{ $t('context') }}</h3>
                </div>
                <div class="policy-details">
                  <div v-html="$t('context_content')"></div>
                </div>
              </div>
              <!-- Goal and Objectives -->
              <div id="Goal_and_Objectives" class="policy-item">
                <div class="title">
                  <h3>{{ $t('goals_and_objectives') }}</h3>
                </div>
                <div class="policy-details">
                  
                  <div v-html="$t('goals_and_objectives_content')"></div>

                </div>
              </div>
              <!-- Activities & Workpackages -->
              <div id="Activities&Workpackages" class="policy-item">
                <div class="title">
                  <h3>{{ $t('activities_and_workpackages') }}</h3>
                </div>
                <div class="policy-details">
                  <div v-html="$t('activities_and_workpackages_content')"></div>
                </div>
              </div>
              <!-- Deliverables -->
              <div id="Deliverables" class="policy-item">
                <div class="title">
                  <h3>{{ $t('deliverables') }}</h3>
                </div>
                <div class="policy-details">
                  <div v-html="$t('deliverables_content')"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<script>
export default {
  name: "ContextComponent"
}
</script>

<style scoped>

.ha-title{
  width: 80%;
  margin: 20px auto;
  text-align: start;
}

.title h3{
  font-weight: bold !important;
  font-size: 24px !important;
}
</style>