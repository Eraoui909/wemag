<template>
  <div class="ha-home">
    <Header/>
    <NewsComponent/>
    <Partners/>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header";
import NewsComponent from "@/components/NewsComponent";
import Partners from "@/components/PartnersComponent";

export default {
  name: 'Home',
  components: {
    Header,NewsComponent,Partners
  }
}
</script>