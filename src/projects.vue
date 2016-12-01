<template>
  <div id="foo">
    <h2>This is FOO!</h2>
    <div class="round">
      <h2>{{ count }}</h2>
    </div>
    <button @click="startTimer">Click to start timer</button>
  </div>
</template>

<script>
export default {
  name: 'foo',
  data () {
    return {
      count: 10
    }
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        this.count -= 1
        if (this.count === 0) {
          clearInterval(this.interval)
          this.count = 10
        }
      }, 1000)
    }
  }
}
</script>
