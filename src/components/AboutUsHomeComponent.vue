<template>
  <div class="ha-about">
    <div class="ha-title">
      <h1>{{ $t('about_us') }}</h1>
    </div>
    <div class="ha-content">
      <div class="ha-section">
        <p>
          WEMag is a Capacity Building project in the field of Higher Education. It involves 10
          institutions and 5 countries. Its overall goal is to improve young Maghrebin educated
          women’s self-employment prospects by providing them with entrepreneurial knowledge
          and access to business networks.
        </p>
      </div>
      <div class="ha-section">
        <p>
          The project is made of core activities, which expected results are broken down into Work
          Packages (WP 1-6) and linked to the target groups’ needs they are expected to meet. The
          methodology emphasizes a participatory approach with the project partners but also with
          the target group, in order to co-create an effective curriculum dedicated to promote female
          entrepreneurship. <router-link to="/about" style="color: var(--first-color)" >{{ $t('read_more') }}...</router-link>
        </p>
      </div>
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