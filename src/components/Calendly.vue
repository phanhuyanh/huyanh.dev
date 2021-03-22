<template>
  <div class="calendly">
    <div class="calendly-inline-widget" data-url="https://calendly.com/huyanhdev/15min" style="min-width:320px;height:630px;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let script = document.createElement('script')
    script.async = true
    script.src = `https://assets.calendly.com/assets/external/widget.js`
    document.body.appendChild(script)
  }
}
</script>