<template>
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
</template>

<page-query>
{
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
}
</page-query>

<script>
export default {
  name: 'Locations',
  computed: {
    staticLocation() {
      return this.$page.allContentfulLocationInfo.edges[0].node
    }
  }
}
</script>
