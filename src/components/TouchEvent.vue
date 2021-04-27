<template>
  <div class="touch-event">
    <div class="area" @mousedown="mousedown" @touchstart="touchstart" ref="area"></div>
  </div>
</template>

<script>
export default {
  methods: {
    mousedown() {
      this.$refs.area.style.borderColor = '#ccc'
      this.$refs.area.addEventListener('mousemove', this.mousemove)
      this.$refs.area.addEventListener('mouseup', this.mouseup)
    },
    mousemove() {
      this.$refs.area.style.borderColor = 'red'
    },
    mouseup() {
      this.$refs.area.style.borderColor = ''
      this.$refs.area.removeEventListener('mousemove', this.mousemove)
      this.$refs.area.removeEventListener('mouseup', this.mouseup)
    },
    touchstart() {
      this.$refs.area.style.backgroud = 'blue'
      this.$refs.area.addEventListener('touchmove', this.touchmove, false)
      this.$refs.area.addEventListener('touchend', this.touchend, false)
    },
    touchmove() {
      this.$refs.area.style.background = 'purple'
    },
    touchend() {
      this.$refs.area.style.backgroud = ''
      this.$refs.area.removeEventListener('touchmove', this.touchmove, false)
      this.$refs.area.removeEventListener('touchend', this.touchend, false)
    }
  }
}
</script>

<style>
.touch-event {
  height: 100vh;
  width: 100%;
  display: grid; 
  place-content: center;
}
.area {
  border: 2px dashed #333;
  width: 200px;
  height: 200px;
}
</style>