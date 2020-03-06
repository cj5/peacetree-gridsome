<template>
  <header class="header">
    <div class="container">
      <div class="header-wrap">
        <g-link to="/" class="logo no-active-style">
          <g-image :src="staticGlobal.companyLogo.file.url" />
          <h1 class="site-name">{{ staticGlobal.companyName }}</h1>
        </g-link>
        <nav class="nav">
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
  computed: {
    staticGlobal() {
      return this.$page.allContentfulGlobal.edges[0].node
    }
  }
}
</script>