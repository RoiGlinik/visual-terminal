<template>
  <div id="app">
    <Terminal index="1"/>
    <br />
    <p>split</p>
    <Terminal index="2"/>
  </div>
</template>

<script>
import Terminal from './components/Terminal.vue'

export default {
  name: 'App',
  components: {
    Terminal
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/coreui";
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
