<template>
  <footer class="footer">
    <div class="footer-wrap">
      <div class="logo-wrap">
        <g-link to="/" class="logo no-active-style">
          <g-image :src="staticGlobal.companyLogo.file.url" />
          <p class="site-name">{{ staticGlobal.companyName }}</p>
        </g-link>
      </div>
      <div class="footer-links">
        <div class="container">
          <div class="module-wrap">
            <div class="module">
              <div class="module-item">
                <i class="fas fa-phone"></i>
                <p>Phone: </p>
                <a href="#">715-417-3241</a>
              </div>
              <div class="module-item">
                <i class="fas fa-fax"></i>
                <p>Fax: </p>
                <p>715-417-3243</p>
              </div>
              <div class="module-item">
                <i class="fas fa-envelope"></i>
                <p>Email: </p>
                <a href="#">main@peacetreecounseling.com</a>
              </div>
            </div>
            <div class="module">
              <div class="module-item">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2-2gSoGr_5JZCJsWu3J8ViGPkkKK7_0FxppQXOp3vZ-HhNw/viewform" target="_blank">Client Satisfaction Survey</a>
              </div>
              <div class="module-item">
                <a href="https://app.procentive.com/clientportal2/" target="_blank">Client Portal</a>
              </div>
              <div class="module-item">
                <a href="https://exchange.charter-business.net/owa/" target="_blank">Webmail</a>
              </div>
            </div>
          </div>
        </div>
        <div class="filter"></div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="copy-wrap">
            <p>&copy; <span class="year">{{ year }}</span>{{ staticGlobal.companyName }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<page-query>
{
  allContentfulStaticGlobal {
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
  name: 'Footer',
  computed: {
    staticGlobal() {
      return this.$page.allContentfulStaticGlobal.edges[0].node
    },
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>