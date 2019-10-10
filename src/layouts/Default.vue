<template>
  <div id="app" class="layout" :class="shortHeader">
    <Header />
    <main role="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Default',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      shortHeader: ''
    }
  },
  methods: {
    isShortHeader() {
      let scroll = window.pageYOffset
      console.log(scroll)
      if (scroll > 100) {
        this.shortHeader = 'short-header'
      } else {
        this.shortHeader = ''
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', e => {
      this.isShortHeader()
    })
  }
}
</script>

<style lang="scss">
  @import '../styles/main';
</style>
