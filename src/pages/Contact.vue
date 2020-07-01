<template>
  <Layout>
    <div class="contact-page">
      <section class="page-heading">
        <div class="container">
          <h1 class="heading">Contact</h1>
        </div>
      </section>
      <Locations />
      <div class="contact-details bg-img">
        <div class="container">
          <div class="flex-grid">
            <div class="item item-1">
              <h2 class="heading-2">{{ staticContactPage.hoursHeading }}</h2>
              <div class="card">
                <table>
                  <tr v-for="(i, key) in hours" :key="key">
                    <td>{{ i.day }}</td>
                    <td>{{ i.timeRange }}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="item item-2">
              <h2 class="heading-2">{{ staticContactPage.contactHeading }}</h2>
              <div class="card">
                <ul>
                  <li>{{ staticGlobal.mailingAddressLine2 }}</li>
                  <li>{{ staticGlobal.mailingAddressLine3 }}</li>
                </ul>
                <ul>
                  <li>
                    <span class="bold">Phone: </span>
                    <a :href="`tel:${formatPhone(staticGlobal.phoneNumber)}`">{{ staticGlobal.phoneNumber }}</a>
                  </li>
                  <li>
                    <span class="bold">Fax: </span>
                    {{ staticGlobal.faxNumber }}
                  </li>
                  <li>
                    <span class="bold">Email: </span>
                    <a :href="`mailto:${staticGlobal.emailAddress}`">{{ staticGlobal.emailAddress }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="filter"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  allContentfulContactPage {
    edges {
      node {
        hoursHeading
        mondayHours
        tuesdayHours
        wednesdayHours
        thursdayHours
        fridayHours
        saturdayHours
        sundayHours
        contactHeading
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
        mailingAddressLine2
        mailingAddressLine3
      }
    }
  }
}
</page-query>

<script>
import Locations from '../components/Locations'

export default {
  name: 'Contact',
  components: {
    Locations
  },
  computed: {
    staticContactPage() {
      return this.$page.allContentfulContactPage.edges[0].node
    },
    staticGlobal() {
      return this.$page.allContentfulGlobal.edges[0].node
    },
    hours() {
      return [
        {
          day: 'Monday',
          timeRange: this.staticContactPage.mondayHours
        },
        {
          day: 'Tuesday',
          timeRange: this.staticContactPage.tuesdayHours
        },
        {
          day: 'Wednesday',
          timeRange: this.staticContactPage.wednesdayHours
        },
        {
          day: 'Thursday',
          timeRange: this.staticContactPage.thursdayHours
        },
        {
          day: 'Friday',
          timeRange: this.staticContactPage.fridayHours
        },
        {
          day: 'Saturday',
          timeRange: this.staticContactPage.saturdayHours
        },
        {
          day: 'Sunday',
          timeRange: this.staticContactPage.sundayHours
        },
      ]
    }
  },
  methods: {
    formatPhone(number) {
      return number.replace(/\D/g,'')
    }
  },
  metaInfo: {
    title: 'Contact'
  }
}
</script>
