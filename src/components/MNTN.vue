<template>
  <div class="MNTN">
    <div class="hero-section">
      <div class="header">
        <div class="container d-flex align-items-center justify-content-between">
          <div class="logo"><router-link :to="{name: 'mntn'}">MNTN</router-link></div>
          <ul class="nav">
            <li class="nav-item"><a href="#">Equipment</a></li>
            <li class="nav-item"><a href="#">About us</a></li>
            <li class="nav-item"><a href="#">Blog</a></li>
          </ul>
          <div class="account">
            <span class="account-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="white"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                </g>
              </svg>
            </span>
            <span class="account-text">Account</span>
          </div>
        </div>
      </div>
      <div class="content-hero">
        <div class="tag-line">
          <div class="line"></div>
          <div class="hiking"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/chronicle-display');
:root {
  --color-link-hover: #fbd784;
}
.MNTN {
  font-family: 'Sans Serif', Arial, sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 32px;
  font-weight: 500;
}
.hero-section {
  width: 100%;
  height: 100vh;
  position: relative;
  background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-top: 40px;
}
.container {
  padding: 0 80px;
  width: 100%;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}
.header .logo {
  font-size: 32px;
  line-height: 36px;
  font-family: 'Chronicle Display', sans-serif;
}
.header .logo a {
  text-decoration: none;
  color: #fff;
  letter-spacing: 0.01em;
}
.header .nav {
  list-style: none;
  display: flex;
}
.header .nav li {
  display: flex;
  transition: 200ms all ease;
  cursor: pointer;
}
.header .nav li:hover {
  transform: translate3d(0, -2px, 0);
}
.header .nav li:hover a {
  color: #fbd784;
}
.header .nav li a {
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
  padding: 8px 24px;
}
.header .account {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.header .account:hover {
  color: #fbd784;
}
.header .account:hover svg path {
  fill: #fbd784;
}
.header .account .account-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.header .account .text {
  font-weight: 700;
}
</style>