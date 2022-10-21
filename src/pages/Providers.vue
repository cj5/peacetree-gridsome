<template>
  <Layout>
    <div class="providers-page">
      <section class="page-heading">
        <div class="container">
          <h1 class="heading">{{ staticProviders.providersHeading }}</h1>
        </div>
      </section>
      <section class="providers-intro">
        <div class="container">
          <div class="mxw-820 center">
            <p class="intro-1" v-html="staticProviders.providersIntroCopy1"></p>
            <div class="dib">
              <a class="scroll" tabindex="0">
                <span v-html="staticProviders.providersIntroCopy2"></span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="hide">
                  <defs>
                    <symbol id="icon-chevron-down" viewBox="0 0 24 24">
                      <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                    </symbol>
                  </defs>
                </svg>
                <svg class="icon icon-chevron-down"><use xlink:href="#icon-chevron-down"></use></svg>
                <!-- <span class="arrow-down">❯</span> -->
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="providers-section">
        <div class="container">
          <div class="providers-grid">

            <g-link :to="i.node.path" class="provider-module no-line" v-for="(i, key) in providers" :key="key">
              <g-image :src="i.node.providerImages[0].file.url" v-if="i.node.providerImages.length" />
              <g-image src="~/images/providers/placeholder.jpg" v-else />
              <div class="copy-wrap">
                <h2 class="provider-name">
                  <span>{{ i.node.providerName }}</span>
                  <span class="provider-creds" v-if="i.node.providerCreds">{{ i.node.providerCreds }}</span>
                </h2>
                <p class="provider-position">{{ i.node.providerPosition }}</p>
                <p class="provider-supervisor" v-if="i.node.providerSupervisor">{{ staticProviders.providerSupervisorLeadIn }} {{ i.node.providerSupervisor }}</p>
                <p class="provider-location">{{ i.node.providerLocation }}</p>
              </div>
            </g-link>

          </div>
        </div>
        <div class="filter"></div>
      </section>
    </div>
  </Layout>
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
  allContentfulProviderPage {
    edges {
      node {
        providersHeading
        providersIntroCopy1
        providersIntroCopy2
        providerSupervisorLeadIn
      }
    }
  }
  allContentfulProvider(sortBy: "order", order: ASC) {
    edges {
      node {
        providerImages {
          file {
            url
          }
        }
        providerName
        providerCreds
        providerPosition
        providerSupervisor
        providerLocation
        path
        order
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
        phoneNumber
        faxNumber
        emailAddress
      }
    }
  }
}
</page-query>

<script>
import { smoothScroll } from '../utilities';

export default {
  name: 'Providers',
  computed: {
    staticProviders() {
      return this.$page.allContentfulProviderPage.edges[0].node
    },
    providers() {
      return this.$page.allContentfulProvider.edges
    }
  },
  mounted() {
    const headerOffset = 72
    const scrollTrigger = document.querySelector('.scroll')
    const scrollDestination = document.querySelector('.providers-section')

    scrollTrigger.addEventListener('click', () => smoothScroll(scrollDestination, headerOffset));
    scrollTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') smoothScroll(scrollDestination, headerOffset);
    });
  },
  metaInfo: {
    title: 'Providers'
  }
}
</script>
