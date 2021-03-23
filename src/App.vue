<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Use global site tag
    let script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=UA-191976170-1`
    document.head.append(script)

    window.dataLayer = window.dataLayer || []
    function gtag(){window.dataLayer.push(arguments)}
    gtag('js', new Date())

    gtag('config', 'UA-191976170-1')
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>