<template>
  <div class="landing-page">
    <div class="nav">
      <div class="container">
        <div class="search">
          <span class="icon-search">
            <svg class="svg" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M14.146 14.854l.708-.708-4.272-4.272C11.466 8.83 12 7.477 12 6c0-3.314-2.686-6-6-6-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 1.477 0 2.83-.534 3.874-1.418l4.272 4.272zM11 6c0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5z" fill-rule="nonzero" fill-opacity="1" fill="#000" stroke="none"></path></svg>
          </span>
          <input type="text" placeholder="Search" v-model="textSearch">
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="sort">
          <span class="show-as-grid active">
            <svg class="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M1 1h3v3H1V1zM0 0h5v5H0V0zm1 8h3v3H1V8zM0 7h5v5H0V7zm11-6H8v3h3V1zM8 0H7v5h5V0H8zm0 8h3v3H8V8zM7 7h5v5H7V7z" fill-rule="evenodd" fill-opacity="1" fill="#000" stroke="none"></path></svg>
          </span>
          <span class="show-as-list">
            <svg class="svg" width="14" height="11" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h14v1H0V0zm0 5h14v1H0V5zm14 5H0v1h14v-1z" fill-rule="evenodd" fill-opacity=".8" fill="#000" stroke="none"></path></svg>
          </span>
        </div>
        <div class="landing-page-wrapper">
          <div class="item" v-for="(item, index) in currLandingPage" :key="index" @click="openLandingPage">
            <div class="thumbnail">
              <img :src="getThumbnail(item.thumbnail)" alt="">
            </div>
            <div class="title">
              <h3>MNTN - Landing Page</h3>
              <p>29 Mar 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      textSearch: '',
      landing: [
        {name: 'MNTN', value: 'mntn', thumbnail: 'Thumbnail-mntn.png'}
      ]
    }
  },
  computed: {
    currLandingPage() {
      return this.landing.filter(page => {
        let expression = this.textSearch.split``.join`.*`
        let regex = new RegExp(expression, 'i')
        let match = page.name.match(regex)
        return !!match
      })
    }
  },
  methods: {
    getThumbnail(name) {
      var images = require.context('@/assets/img/thumbnail', false, /\.png$/)
      return images('./' + name)
    },
    openLandingPage() {
      this.$router.push({name: 'mntn'})
    }
  }
}
</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')
.landing-page 
  height: 100vh
  overflow: hidden
  display: flex
  flex-direction: column

.container 
  padding: 0 30px
  width: 100%
  height: 100%

.nav 
  display: flex
  align-items: center
  box-shadow: 0 1px 0 0 #e5e5e5
  width: 100%
  height: 48px
  background: #fff
  .search 
    display: flex
    align-items: center
    height: 100%
    .icon-search
      margin-right: 8px
      width: 32px
      height: 32px
      display: flex
      align-items: center
      justify-content: center
    input
      border: none
      outline: 0
      font-size: 13px
      line-height: 24px
      height: 32px
      flex: 1

.content 
  flex: 1
  .container
    display: flex
    flex-direction: column
  .sort
    height: 64px
    display: flex
    align-items: center
    justify-content: flex-end
    .show-as-grid, .show-as-list
      height: 32px
      width: 32px
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      box-shadow: inset 0 0 0 1px #e6e6e6
      transition: 200ms all
      &:hover
        box-shadow: inset 0 0 0 1px #e6e6e6
        background-color: #e6e6e6
    .show-as-grid, .show-as-list.active
      box-shadow: inset 0 0 0 1px #18a0fb !important
      background-color: #fff !important
      path
        fill: #18a0fb
    .show-as-list
      margin-left: 8px
  
  .landing-page-wrapper
    flex: 1
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))
    grid-gap: 32px 32px
    .item
      border: 1px solid #b3b3b373
      border-radius: 4px
      display: flex
      flex-direction: column
      cursor: pointer
      height: max-content
      .thumbnail
        width: 100%
        height: 200px
        img
          width: 100%
          height: 100%
      .title
        width: 100%
        padding: 0 10px
        h3
          margin-top: 9px
          color: #333
          user-select: none
          font-weight: bold
          line-height: 20px
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
          font-size: 13px
          font-family: Inter,sans-serif
        p
          color: #b3b3b3
          padding-bottom: 10px
          padding-top: 1px
          font-size: 11px
          line-height: 16px
          user-select: none
          font-family: Inter, sans-serif
</style>