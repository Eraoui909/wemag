<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer />

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";


export default {
  name: 'Home',
  components: {
    Navbar,Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
