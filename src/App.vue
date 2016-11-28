<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Vue Router TEST!'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Helvetica';
    text-align: center;
    margin-top: 100px;
  }

  button {
    padding: 10px 15px;
    border: 0;
    border-radius: 4px;
    background: tomato;
    color: #fff;
    font-size: 1.2em;
  }
</style>