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
          <div class="mxw-800 center">
            <p class="italic fz-lg" v-html="staticProviders.providersIntroCopy1"></p>
            <a href="#providers" class="scroll" v-html="staticProviders.providersIntroCopy2"></a>
          </div>
        </div>
      </section>
      <section class="providers-section" id="providers">
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
  allContentfulStaticProviderPage {
    edges {
      node {
        providersHeading
        providersIntroCopy1
        providersIntroCopy2
      }
    }
  }
  allContentfulDynamicProvider(sortBy: "order", order: ASC) {
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
}
</page-query>

<script>
export default {
  name: 'Providers',
  computed: {
    staticProviders() {
      return this.$page.allContentfulStaticProviderPage.edges[0].node
    },
    providers() {
      return this.$page.allContentfulDynamicProvider.edges
    }
  },
  mounted() {
    console.log(JSON.stringify(this.providers, null, 2))

    const easeInCubic = function (t) { return t*t*t }
    const scrollElems = document.getElementsByClassName('scroll');

    //console.log(scrollElems);
    const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
      //debugger;
      const runtime = stamp - start;
      let progress = runtime / duration;
      const ease = easeInCubic(progress);

      progress = Math.min(progress, 1);
      console.log(startScrollOffset,startScrollOffset + (scrollEndElemTop * ease));

      const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
      window.scroll(0, (startScrollOffset - 72) + (scrollEndElemTop * ease));

      if(runtime < duration){
        requestAnimationFrame((timestamp) => {
          const stamp = new Date().getTime();
          scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        })
      }
    }

    for(let i = 0; i < scrollElems.length; i++) {
      const elem = scrollElems[i];

      elem.addEventListener('click',function(e) {
        e.preventDefault();
        const scrollElemId = e.target.href.split('#')[1];
        const scrollEndElem = document.getElementById(scrollElemId);

        const anim = requestAnimationFrame(() => {
          const stamp = new Date().getTime();
          const duration = 300;
          const start = stamp;

          const startScrollOffset = window.pageYOffset;

          const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

          scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
          // scrollToElem(scrollEndElemTop);
        })
      })
    }
  },
  metaInfo: {
    title: 'Providers'
  }
}
</script>
