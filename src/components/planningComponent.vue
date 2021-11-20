<template>
    <div class="ha-planning">
      <div class="ha-title">
        <h1>{{ $t('planning') }}</h1>
      </div>
      <div class="ha-planning-content">
        <div><img src="../assets/planning/img.png" width="100%" alt="planning"></div>
        <div style="text-align: start"><img src="../assets/planning/img_1.png" width="40%" alt="planning"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "planningComponent"
}
</script>

<style scoped>
  .ha-planning-content{
    width: 80%;
    margin: 10px auto;
    overflow: auto;
    box-shadow: 0 7px 20px 0 rgb(0 0 0 / 8%);
  }
  @media (max-width: 700px) {
    .ha-planning-content{
      width: 90%;
    }
  }
</style>