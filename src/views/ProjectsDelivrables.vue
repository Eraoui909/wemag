<template>

    <div class="ha-project-deliverables ha-about">
        <div class="ha-title">
            <h1>{{ $t('deliverables') }}</h1>
        </div>
        <div class="ha-content">

            <strong><h4 v-html="$t('deliverables_content_obj.wp1_title')"></h4></strong>
            <div class="ha-section" v-html="$t('deliverables_content_obj.wp1_content')"></div>
            <iframe src="Document_1_Final_Report_WP1_MBS.pdf" frameborder="0" width="100%" height="400px" ></iframe>

            <br>

            <strong><h4 v-html="$t('deliverables_content_obj.wp2_title')"></h4></strong>
            <div class="ha-section" v-html="$t('deliverables_content_obj.wp2_content')"></div>

            <br>

            <strong><h4 v-html="$t('deliverables_content_obj.wp3_title')"></h4></strong>
            <div class="ha-section" v-html="$t('deliverables_content_obj.wp3_content')"></div>

            <br>

            <strong><h4 v-html="$t('deliverables_content_obj.wp4_title')"></h4></strong>
            <div class="ha-section" v-html="$t('deliverables_content_obj.wp4_content')"></div>


        </div>
    </div>
  </template>
  
  <script>
    export default {
        name: "ProjectsDelivrables"
    }
  </script>
  
  <style scoped>

.ha-content{
    margin: 10px auto;
    position: relative;
    width: 70%;
    text-align: justify;
    box-shadow: 0 7px 20px 0 rgb(0 0 0 / 8%);
    padding:5px 10px;
  }
  @media (max-width: 700px) {
    .ha-content{
      width: 90%;
    }
  }
  .ha-content p{
    font-size: 16px;
    letter-spacing: 0;
    line-height: 25px;
    color: #808080;
  }
  .ha-content .ha-section{
    margin: 40px auto;
  }


  
  </style>