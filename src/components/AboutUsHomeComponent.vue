<template>
  <div class="ha-about">
    <div class="ha-title">
      <h1>{{ $t('about_us') }}</h1>
    </div>
    <div class="ha-content">
      <div v-html="$t('about_us_content')"></div>
      <router-link to="/about" style="color: var(--first-color)" >{{ $t('read_more') }}...</router-link>
      <div class="ha-section">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AboutUsHomeComponent"
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