<template>
  <Layout>
    <div class="employment-page">
      <section class="page-heading">
        <div class="container">
          <h1 class="heading">Employment</h1>
        </div>
      </section>
      <div class="container">
        <div class="mxw-820 pb-8">
          <div 
            v-for="(i, key) in positionOpenings" 
            :key="key"
            class="position"
          >
            <h2 class="heading-2">{{ i.node.positionTitle }}</h2>
            <p v-html="i.node.positionInfo"></p>
            <h3 class="subheading">{{ staticEmploymentPage.requirementsHeading }}</h3>
            <p v-html="i.node.positionRequirements"></p>
          </div>
          <div>
            <h3 class="subheading">{{ staticEmploymentPage.mailHeading }}</h3>
            <ul class="mb-3">
              <li v-html="staticGlobal.mailingAddressLine1"></li>
              <li v-html="staticGlobal.mailingAddressLine2"></li>
              <li v-html="staticGlobal.mailingAddressLine3"></li>
            </ul>
            <p>Or mail to: <a :href="`mailto:${staticGlobal.emailAddress}`">{{ staticGlobal.emailAddress }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  allContentfulEmploymentPage {
    edges {
      node {
        requirementsHeading
        mailHeading
      }
    }
  }
  allContentfulPositionOpening(sortBy: "order", order: ASC) {
    edges {
      node {
        positionTitle
        positionInfo
        positionRequirements
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
        mailingAddressLine1
        mailingAddressLine2
        mailingAddressLine3
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Employment',
  computed: {
    staticEmploymentPage() {
      return this.$page.allContentfulEmploymentPage.edges[0].node
    },
    staticGlobal() {
      return this.$page.allContentfulGlobal.edges[0].node
    },
    positionOpenings() {
      return this.$page.allContentfulPositionOpening.edges
    }
  },
  metaInfo: {
    title: 'Employment'
  }
}
</script>
