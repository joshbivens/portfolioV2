<template>
  <div id="bar">
    <h2>This is BAR!</h2>
    <div id="counter">
      <h2>{{ count }}</h2>
      <button @click="count++">Add One</button>
      <button @click="count-- ">Subtract One</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bar',
    data() {
      return {
        count: 0
      }
    }
  }
</script>