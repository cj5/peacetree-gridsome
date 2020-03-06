<template>
  <Layout>
    <div class="home-page">
      <section class="hero">
        <g-image :src="staticHome.heroImage.file.url" />
        <div class="container">
          <h2 class="hero-heading">{{ staticHome.heroHeading }}</h2>
        </div>
        <div class="filter"></div>
      </section>
      <section class="home-copy">
        <div class="container">
          <div class="mxw-800">
            <div v-html="staticHome.mainCopy"></div>
            <p class="attention">{{ staticHome.attentionCopy }}</p>
          </div>
        </div>
      </section>
      <section class="locations">
        <div class="container">
          <h2 class="heading-2">{{ staticLocation.locationsHeading }}</h2>
          <div class="flex-grid">
            <div class="item item-1">
              <h3 class="subheading">{{ staticLocation.location1City }}</h3>
              <div class="map">
                <div class="map-wrap">
                  <iframe 
                    width="100%" 
                    height="400" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    :src="`https://maps.google.com/maps?q=${staticLocation.location1Map.lat},${staticLocation.location1Map.lon}&hl=es;z=14&amp;output=embed`"
                  >
                  </iframe>
                </div>
                <div class="filter">
                  <p>Loading map...</p>
                </div>
              </div>
            </div>
            <div class="item item-2">
              <h3 class="subheading">{{ staticLocation.location2City }}</h3>
              <div class="map">
                <div class="map-wrap">
                  <iframe 
                    width="100%" 
                    height="400" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    :src="`https://maps.google.com/maps?q=${staticLocation.location2Map.lat},${staticLocation.location2Map.lon}&hl=es;z=14&amp;output=embed`"
                  >
                  </iframe>
                </div>
                <div class="filter">
                  <p>Loading map...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="filter"></div>
      </section>
      <section class="location-image">
        <g-image :src="staticLocation.locationImage.file.url" />
        <div class="filter"></div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
{
  allContentfulHomePage {
    edges {
      node {
        heroImage {
          file {
            url
          }
        }
        heroHeading
        mainCopy
        attentionCopy
      }
    }
  }
  allContentfulLocationInfo {
    edges {
      node {
        locationsHeading
        locationImage {
          file {
            url
          }
        }
        location1Address
        location1City
        location1State
        location1Zip
        location1Map {
          lon
          lat
        }
        location2City
        location2Address
        location2State
        location2Zip
        location2Map {
          lon
          lat
        }
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
}
</page-query>

<script>
export default {
  computed: {
    staticHome() {
      return this.$page.allContentfulHomePage.edges[0].node
    },
    staticLocation() {
      return this.$page.allContentfulLocationInfo.edges[0].node
    }
  },
  mounted() {
    console.log(this.staticLocation.location1MapEmbedUrl)
  }
  // metaInfo: {
  //   title: 'Hello, world!'
  // }
}
</script>

