<template>
  <Layout>
    <div class="provider-page">
      <section class="page-heading">
        <div class="container">
          <h1 class="heading">
            <span>{{ provider.providerName }}</span>
            <span class="provider-creds">{{ provider.providerCreds }}</span>
          </h1>
          <p class="provider-pronouns">
            <span class="pronouns-heading">{{ staticProvider.providerPronounsHeading }}</span>
            <span class="pronouns"> {{ provider.providerPronouns }}</span>
          </p>
        </div>
      </section>
      <div class="container">
        <g-link exact to="/providers" class="back"><i class="fas fa-arrow-left"></i>Back to all Providers</g-link>
      </div>
      <section class="provider-background">
        <div class="container">
          <div class="content-wrap pb-3">
            <div class="img-wrap">
              <g-image :src="provider.providerImages[1].file.url" v-if="provider.providerImages[1]" />
              <g-image :src="provider.providerImages[0].file.url" v-else />
            </div>
            <p v-html="provider.providerBackground"></p>
          </div>
        </div>
      </section>
      <section class="provider-info">
        <div class="container">
          <div class="info-item mxw-820">
            <h2 class="subheading">{{ staticProvider.providerLocationHeading }}<span v-if="isMultipleLocations(provider.providerLocation)">s</span></h2>
            <p>{{ provider.providerLocation }}</p>
          </div>
          <div class="info-item mxw-820">
            <h2 class="subheading">{{ staticProvider.providerPopulationsHeading }}</h2>
            <p>{{ provider.providerPopulationsServed }}</p>
          </div>
          <div class="info-item mxw-820">
            <h2 class="subheading">{{ staticProvider.providerInterestsHeading }}</h2>
            <p>{{ provider.providerSpecialInterests }}</p>
          </div>
        </div>
        <div class="filter"></div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query contentfulProvider($path: String!) {
  contentfulProvider(path: $path) {
    providerImages {
      file {
        url
      }
    }
    providerName
    providerCreds
    providerPronouns
    providerBackground
    providerLocation
    providerPopulationsServed
    providerSpecialInterests
  }
  allContentfulProviderPage {
    edges {
      node {
        providerPronounsHeading
        providerLocationHeading
        providerPopulationsHeading
        providerInterestsHeading
      }
    }
  }
  allContentfulContactInfo {
    edges {
      node {
        phoneNumber
        faxNumber
        emailAddress
      }
    }
  }
  allContentfulFooter {
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
  name: 'ContentfulProviders',
  computed: {
    provider() {
      return this.$page.contentfulProvider
    },
    staticProvider() {
      return this.$page.allContentfulProviderPage.edges[0].node
    }
  },
  methods: {
    isMultipleLocations(str) {
      return str.includes(' and ')

      // IE 11 Polyfill for includes()
      if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
          'use strict';
          if (typeof start !== 'number') {
            start = 0;
          }
          if (start + search.length > this.length) {
            return false;
          } else {
            return this.indexOf(search, start) !== -1;
          }
        };
      }
      // END
    }
  }
}
</script>