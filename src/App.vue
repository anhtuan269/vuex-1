<template>
<login />
 <product />
</template>

<script>

import login from './components/Login'
import product from './components/Products'

export default {
  name: 'App',
  components: {
    login,
    product
  }
}
</script>

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
