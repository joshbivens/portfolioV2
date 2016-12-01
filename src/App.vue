<template>
  <div id="app">
    <h1>Josh Bivens | Portfolio</h1>
    <ul>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('../node_modules/milligram/dist/milligram.min.css');

  #app {
    text-align: center;
    margin-top: 100px;
    font-family: "Roboto";
  }
  
</style>