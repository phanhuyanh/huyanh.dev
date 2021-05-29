<template>
  <div class="covid19-landing-page">
    <header>
      <div class="container">
        <div id="header">
          <div class="logo">
            <img src="../assets/img/covid/logo.svg" alt="Covid" title="Covid">
          </div>
          <div class="content">
            <nav>
              <ul>
                <li class="nav-item">
                  <a href="#">Overview</a>
                </li>
                <li class="nav-item">
                  <a href="#">Contagon</a>
                </li>
                <li class="nav-item">
                  <a href="#">Symptoms</a>
                </li>
                <li class="nav-item">
                  <a href="#">Prevention</a>
                </li>
              </ul>
            </nav>
            <div class="contact">
              <button type="button" role="button" aria-pressed="true">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')

$primary: #FA5652
$secondary: #035755
$text: #4B4F51
$primary-bg: #FB4C47
$primary-bg-lighter: #rgba(250, 86, 82, 0.15)

.container
  margin: auto
  width: 100%

@media screen and (min-width: 576px) 
  .container
    width: 100%

@media screen and (min-width: 768px)
  .container
    width: 720px

@media screen and (min-width: 992px)
  .container
    width: 960px
  
@media screen and (min-width: 1200px)
  .container
    width: 1140px

@media screen and (min-width: 1440px)
  .container
    width: 1320px

.logo img
  width: 62px
  height: 62px

.covid19-landing-page
  font-family: 'Roboto', sans-serif

#header
  display: flex
  align-items: center
  justify-content: space-between

  .content
    display: flex
    align-items: center

    nav
      display: block
      ul
        display: flex
        align-items: center
        list-style-type: none
        li
          display: flex
          a
            text-decoration: none
            color: $secondary
            font-size: 18px
            line-height: 22px
            padding: 0 15px

    .contact
      button
        border: 2px solid $primary-bg
        background: #fff
        outline: 0
        color: $primary
        border-radius: 46px
        padding: 18px 53px
  
</style>