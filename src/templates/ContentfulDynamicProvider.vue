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
        <g-link exact to="/providers" class="back"><span class="arrow">&#10140;</span>&nbsp;Back to all Providers</g-link>
      </div>
      <section class="provider-background">
        <div class="container">
          <div class="content-wrap">
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
          <div class="info-item mxw-800">
            <h2 class="subheading">{{ staticProvider.providerLocationHeading }}</h2>
            <p>{{ provider.providerLocation }}</p>
          </div>
          <div class="info-item mxw-800">
            <h2 class="subheading">{{ staticProvider.providerPopulationsHeading }}</h2>
            <p>{{ provider.providerPopulationsServed }}</p>
          </div>
          <div class="info-item mxw-800">
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
query DynamicProvider($path: String!) {
  contentfulDynamicProvider(path: $path) {
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
  allContentfulStaticProviderPage {
    edges {
      node {
        providerPronounsHeading
        providerLocationHeading
        providerPopulationsHeading
        providerInterestsHeading
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
  name: 'ContentfulProviders',
  computed: {
    provider() {
      return this.$page.contentfulDynamicProvider
    },
    staticProvider() {
      return this.$page.allContentfulStaticProviderPage.edges[0].node
    }
  }
}
</script>