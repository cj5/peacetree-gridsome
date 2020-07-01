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
            <a class="scroll" v-html="staticProviders.providersIntroCopy2"></a>
          </div>
        </div>
      </section>
      <section class="providers-section">
        <div class="container">
          <div class="providers-grid">

            <g-link :to="i.node.path" class="provider-module" v-for="(i, key) in providers" :key="key">
              <g-image :src="i.node.providerImages[0].file.url" />
              <div class="copy-wrap">
                <h2 class="provider-name">
                  <span>{{ i.node.providerName }}</span> 
                  <span class="provider-creds" v-if="i.node.providerCreds">{{ i.node.providerCreds }}</span>
                </h2>
                <p class="provider-position">{{ i.node.providerPosition }}</p>
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

    // https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
    function smoothScroll(destination, duration = 200, easing = 'easeInOutQuad', callback) {
      const easings = {
        linear(t) {
          return t;
        },
        easeInQuad(t) {
          return t * t;
        },
        easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic(t) {
          return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart(t) {
          return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint(t) {
          return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
      };

      const start = window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
      const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop - headerOffset;
      const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

      if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
          callback();
        }
        return;
      }

      function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
          if (callback) {
            callback();
          }
          return;
        }

        requestAnimationFrame(scroll);
      }

      scroll();
    }

    scrollTrigger.addEventListener('click', () => smoothScroll(scrollDestination));
  },
  metaInfo: {
    title: 'Providers'
  }
}
</script>
