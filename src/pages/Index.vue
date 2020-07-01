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
          <div class="mxw-820">
            <div v-html="staticHome.mainCopy"></div>
            <p class="attention">{{ staticHome.attentionCopy }}</p>
          </div>
        </div>
      </section>
      <Locations />
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
import Locations from '../components/Locations'

export default {
  components: {
    Locations,
  },
  computed: {
    staticHome() {
      return this.$page.allContentfulHomePage.edges[0].node
    },
  },
}
</script>

