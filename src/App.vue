<template>
  <div id="app">
    <CRow>
      <CCol sm="12" md="12">
        <CCard v-for="index in 2" :key="index">
          <CCardHeader>
            Card title
            <div class="card-header-actions">
              <small class="text-muted">docs</small>
            </div>
          </CCardHeader>
          <CCardBody>
            <Terminal :index="index" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import Terminal from "./components/Terminal.vue";

export default {
  name: "App",
  components: {
    Terminal,
  },
};
</script>

<style lang="scss">
@import "node_modules/@coreui/coreui/scss/coreui";
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
