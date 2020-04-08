<template>
  <div id="app">
    <Flexbox />
    <EchartDemo />
  </div>
</template>

<script>
import Flexbox from './components/Flexbox.vue'
import EchartDemo from './components/EchartDemo.vue'

export default {
  name: 'App',
  components: {
    Flexbox,
    EchartDemo
  }
}
</script>

<style lang="scss" scoped>
#app {
  border: none;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 20px;
}
</style>
