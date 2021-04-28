<template>
  <div class="touch-event">
    <div class="area" @touchstart="touchstart" ref="area">
      {{ x }} -  {{ y }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    touchstart(evt) {
      evt.preventDefault()
      let touchobj = evt.changedTouches[0]
      this.x = touchobj.clientX
      this.y = touchobj.clientY
      this.$refs.area.style.backgroud = 'blue'

      this.$refs.area.addEventListener('touchmove', this.touchmove)
      this.$refs.area.addEventListener('touchend', this.touchend)
    },
    touchmove(evt) {
      evt.preventDefault()
      var touchobj = evt.changedTouches[0]
      this.x = touchobj.clientX
      this.y = touchobj.clientY
      this.$refs.area.style.background = 'purple'
    },
    touchend(evt) {
      evt.preventDefault()
      this.$refs.area.style.backgroud = ''
      this.$refs.area.removeEventListener('touchmove', this.touchmove, false)
      this.$refs.area.removeEventListener('touchend', this.touchend, false)
    }
  }
}
</script>

<style>
.touch-event {
  height: 300vh;
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