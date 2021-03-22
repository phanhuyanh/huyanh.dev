<template>
  <div>Google Analytic</div>
</template>

<script>
export default {
  mounted() {
    // Global site tag (Universal Analytic)
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