<template>
  <div class="touch-event">
    <div class="area" @mousedown="mousedown" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" ref="area">
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
  mounted() {
    // window.addEventListener('DOMContentLoaded', function() {
    //   this.$refs.area.addEventListener('touchstart', this.touchstart, false)
    //   this.$refs.area.addEventListener('touchmove', this.touchmove, false)
    //   this.$refs.area.addEventListener('touchend', this.touchend, false)
    // })
  },
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
    touchstart(evt) {
      evt.preventDefault()
      this.$refs.area.style.backgroud = 'blue'
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
      //this.$refs.area.removeEventListener('touchmove', this.touchmove, false)
      //this.$refs.area.removeEventListener('touchend', this.touchend, false)
    }
  },
  beforeDestroy() {
    this.$refs.area.removeEventListener('touchstart', this.touchstart, false)
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