<template>
  <div class="google-tag-manager">
    Google Tag Manager
    <a href="#" id="button1" name="button1" onclick="dataLayer.push({'event': 'button1-click'});" >Button 1</a>
  </div>
</template>

<script>
export default {
  mounted() {
    // Google Tag Manager
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-K3J2LJ2')
  // End Google Tag Manager 

  // Google Tag Manager (noscript)
  let noscript = document.createElement('noscript')
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3J2LJ2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  document.body.append(noscript)
  // End Google Tag Manager (noscript)
  }
}
</script>