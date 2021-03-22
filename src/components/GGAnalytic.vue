<template>
  <div>Google Analytic</div>
</template>

<script>
export default {
  mounted() {
  let script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-BNVENFG6DF`
  document.head.append(script)

  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  gtag('js', new Date())

  gtag('config', 'G-BNVENFG6DF')
  }
}
</script>