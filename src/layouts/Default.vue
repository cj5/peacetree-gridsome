<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <div class="header-wrap">
          <div class="logo bold">
            <g-link to="/" class="no-active-style">{{ $static.metadata.siteName }}</g-link>
          </div>
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

    <slot/>

    <footer class="footer">
      <div class="container">
        <div class="footer-wrap">
          <p>Footer</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
  @import '../styles/main';
</style>
