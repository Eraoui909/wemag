<template>
    <div class="ha-scientific-valorization">
      <div class="ha-about">
        <div class="ha-title">
            <h1>{{ $t('valorization') }}</h1>
        </div>
        <div class="ha-content">

          <div class="ha-section" v-html="$t('scientific_valorization_obj.content')"></div>

        </div>
    </div>

    </div>
  </template>
  
  <script>
    export default {
        name: "ScientificValorization"
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