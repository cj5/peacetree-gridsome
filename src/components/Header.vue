<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <g-link to="/" class="logo no-active-style">
          <g-image :src="staticGlobal.companyLogo.file.url" />
          <h1 class="site-name">{{ staticGlobal.companyName }}</h1>
        </g-link>
        <a
          class="navicon no-line"
          ref="navicon"
          @click="navicon"
          @keydown.enter="navicon"
          tabindex="0"
        >☰</a>
        <nav :class="`nav ${navOpenClass}`">
          <g-link to="/" class="logo mobile no-active-style">
            <g-image :src="staticGlobal.companyLogo.file.url" />
          </g-link>
          <a
            class="close no-line"
            ref="close"
            @click="close"
            @keydown.enter="close"
            tabindex="0">
          &times;</a>
          <ul>
            <li><g-link exact to="/">Home</g-link></li>
            <li><g-link to="/providers/">Providers</g-link></li>
            <li><g-link to="/scheduling/">Scheduling</g-link></li>
            <li><g-link to="/employment/">Employment</g-link></li>
            <li><g-link to="/contact/">Contact</g-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
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
export default {
  name: 'Header',
  data() {
    return {
      navOpenClass: '',
    }
  },
  computed: {
    staticGlobal() {
      return this.$page.allContentfulGlobal.edges[0].node
    }
  },
  methods: {
    navicon() {
      this.navOpenClass = 'open'
    },
    close() {
      this.navOpenClass = ''
    },
  },
}
</script>
