<template>
  <div class="ha-home">
    <Header/>
    <NewsComponent/>
    <planningComponent/>
    <Partners/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header";
import NewsComponent from "@/components/NewsComponent";
import Partners from "@/components/PartnersComponent";
import planningComponent from "@/components/planningComponent";

export default {
  name: 'Home',
  components: {
    Header,NewsComponent,Partners,planningComponent
  }
}
</script>