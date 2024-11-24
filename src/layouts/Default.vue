<template>
  <div id="app" class="layout" :class="this.shortHeader">
    <Header />
    <main role="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<page-query>
{
  allContentfulGlobal {
    edges {
      node {
        companyName
        companyLogo {
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

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
      if (window.pageYOffset > 100) {
        this.shortHeader = 'short-header'
      } else {
        this.shortHeader = ''
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.isShortHeader()
    })
  }
}
</script>

<style lang="scss">
@import '../styles/main';
</style>
