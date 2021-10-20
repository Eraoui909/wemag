<template>
    <div class="ha-partners">
      <div class="ha-title">
        <h1><span>P</span>artners</h1>
      </div>
      <div class="ha-partners-container">
        <div class="item1">
          <img src="../assets/partners/img.png" alt="partner">
        </div>
        <div class="item2">
          <img src="../assets/partners/img_2.png" alt="partner">
        </div>
        <div class="item3">
          <img src="../assets/partners/img_3.png" alt="partner">
        </div>
        <div class="item4">
          <img src="../assets/partners/img_1.png" alt="partner">
        </div>
        <div class="item5">
          <img src="../assets/partners/img_4.png" alt="partner">
        </div>
        <div class="item6">
          <img src="../assets/partners/img_5.png" alt="partner">
        </div>
        <div class="item7">
          <img src="../assets/partners/img_6.png" alt="partner">
        </div>
        <div class="item8">
          <img src="../assets/partners/img_7.png" alt="partner">
        </div>
        <div class="item9">
          <img src="../assets/partners/img_8.png" alt="partner">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "PartnersComponent"
}
</script>

<style scoped>


.ha-partners-container{
  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px;
}
.ha-partners-container div{
  width: 300px;
  margin: 10px auto;
}


</style>