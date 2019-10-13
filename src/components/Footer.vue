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
                <a :href="`tel:${formatPhone(staticContact.phoneNumber)}`">{{ staticContact.phoneNumber }}</a>
              </div>
              <div class="module-item">
                <i class="fas fa-fax"></i>
                <p>Fax: </p>
                <p>{{ staticContact.faxNumber }}</p>
              </div>
              <div class="module-item">
                <i class="fas fa-envelope"></i>
                <p>Email: </p>
                <a :href="`mailto:${staticContact.emailAddress}`">{{ staticContact.emailAddress }}</a>
              </div>
            </div>
            <div class="module">
              <div class="module-item">
                <a :href="staticFooter.link1Url" target="_blank">{{ staticFooter.link1Copy }}</a>
              </div>
              <div class="module-item">
                <a :href="staticFooter.link2Url" target="_blank">{{ staticFooter.link2Copy }}</a>
              </div>
              <div class="module-item">
                <a :href="staticFooter.link3Url" target="_blank">{{ staticFooter.link3Copy }}</a>
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
  allContentfulStaticContactInfo {
    edges {
      node {
        phoneNumber
        faxNumber
        emailAddress
      }
    }
  }
  allContentfulStaticFooter {
    edges {
      node {
        link1Copy
        link1Url
        link2Copy
        link2Url
        link3Copy
        link3Url
      }
    }
  }
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
    staticContact() {
      return this.$page.allContentfulStaticContactInfo.edges[0].node
    },
    staticFooter() {
      return this.$page.allContentfulStaticFooter.edges[0].node
    },
    year() {
      return new Date().getFullYear()
    }
  },
  methods: {
    formatPhone(phone) {
      return phone.replace(/\D/g,'')
    }
  }
}
</script>