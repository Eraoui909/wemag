<template>
    <div class="ha-partners">
      <div class="ha-title">
        <h1>{{ $t('partners') }}</h1>
      </div>
      <div class="ha-partners-container">
        <div class="item item1" @mouseenter="hoveredContent('item1')" @mouseleave="leavedContent('item1')">
          <img src="../assets/partners/img.png" alt="partner">
          <a href="https://www.ipag.edu/" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              IPAG
            </div>
          </a>
        </div>
        <div class="item item2" @mouseenter="hoveredContent('item2')" @mouseleave="leavedContent('item2')">
          <img src="../assets/partners/img_2.png" alt="partner">
          <a href="http://www.usmba.ac.ma" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              {{$t('usmba')}}
            </div>
          </a>
        </div>
        <div class="item item3" @mouseenter="hoveredContent('item3')" @mouseleave="leavedContent('item3')">
          <img src="../assets/partners/img_3.png" alt="partner">
          <a href="http://www.ugaf.rnu.tn/" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              {{ $t("ugaf")}}
            </div>
          </a>
        </div>
        <div class="item item4" @mouseenter="hoveredContent('item4')" @mouseleave="leavedContent('item4')">
          <img src="../assets/partners/img_1.png" alt="partner">
          <a href="https://www.munich-business-school.de/" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              {{ $t("mbf")}}
            </div>
          </a>
        </div>
        <div class="item item5" @mouseenter="hoveredContent('item5')" @mouseleave="leavedContent('item5')">
          <img src="../assets/partners/img_4.png" alt="partner">
          <a href="http://www.uh1.ac.ma" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              {{ $t('uh1') }}
            </div>
          </a>
        </div>
        <div class="item item6" @mouseenter="hoveredContent('item6')" @mouseleave="leavedContent('item6')">
          <img src="../assets/partners/img_5.png" alt="partner">
          <a href="http://www.uc.rnu.tn/" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              {{ $t("rnu")}}
            </div>
          </a>
        </div>
        <div class="item item7" @mouseenter="hoveredContent('item7')" @mouseleave="leavedContent('item7')">
          <img src="../assets/partners/img_6.png" alt="partner">
          <a href="https://haikara.fr/" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              haikara
            </div>
          </a>
        </div>

        <div class="item item8" @mouseenter="hoveredContent('item8')" @mouseleave="leavedContent('item8')">
          <img src="../assets/partners/img_7.png" alt="partner">
          <a href="#" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">

            </div>
          </a>
        </div>

        <div class="item item9" @mouseenter="hoveredContent('item9')" @mouseleave="leavedContent('item9')">
          <img src="../assets/partners/vives.svg" alt="partner">
          <a href="https://www.vives.be/nl/onderzoek/business-management-sociale-innovatie/women-entrepreneurs-maghreb" target="_blank">
            <div class="ha-hovered-popup"></div>
            <div class="ha-hovered-content">
              vives hogeschool
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "PartnersComponent",
  methods:{
    hoveredContent(self){
      let elem  = document.querySelector("."+self+" a");
      elem.style.display = "block";
    },
    leavedContent(self) {
      let elem = document.querySelector("." + self + " a");
      elem.style.display = "none";
    }
  }
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

.item{
  position: relative;
}
.item a{
  display: none;
}
.ha-hovered-popup{
  position: absolute;
  left: 0;
  top: -10px;
  right: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #CE6D5177;
  z-index: 2;
  border-radius: 2px;
}
.ha-hovered-content{
  position: absolute;
  left: 0;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  right: 0;
  width: 100%;
  height: 100%;
  font-size: 24px;
  z-index: 3;
  color: white;
  padding: 10px;
  text-shadow: 0 0 5px 5px white;
  font-weight: bold;
}

</style>