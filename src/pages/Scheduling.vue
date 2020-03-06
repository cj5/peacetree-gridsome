<template>
  <Layout>
    <div class="scheduling-page">
      <section class="page-heading">
        <div class="container">
          <h1 class="heading">{{ staticScheduling.schedulingHeading }}</h1>
        </div>
      </section>
      <section class="scheduling-intro">
        <div class="container">
          <div class="center mxw-650">
            <p class="intro-1" v-html="staticScheduling.schedulingIntroCopy1"></p>
            <p v-html="staticScheduling.schedulingIntroCopy2"></p>
            <i class="fas fa-phone"></i>
            <a :href="`tel:${formatPhone(staticContact.phoneNumber)}`">{{ staticContact.phoneNumber }}</a>
          </div>
          <div class="flex mt-8">
            <div class="flex-20 mr-5">
              <g-image :src="staticGlobal.companyLogo.file.url" />
            </div>
            <div>
              <h2 class="heading-2" v-html="staticScheduling.whatToExpectHeading"></h2>
              <p v-html="staticScheduling.whatToExpectCopy"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
{
  allContentfulSchedulingPage {
    edges {
      node {
        schedulingHeading
        schedulingIntroCopy1
        schedulingIntroCopy2
        whatToExpectHeading
        whatToExpectCopy
        costHeading
        costCopy
        paymentHeading
        paymentCopy
        cancellationPolicyHeading
        cancellationPolicyCopy
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
  name: 'Scheduling',
  computed: {
    staticScheduling() {
      return this.$page.allContentfulSchedulingPage.edges[0].node
    },
    staticContact() {
      return this.$page.allContentfulContactInfo.edges[0].node
    },
    staticGlobal() {
      return this.$page.allContentfulGlobal.edges[0].node
    },
  },
  methods: {
    formatPhone(phone) {
      return phone.replace(/\D/g,'')
    }
  },
  metaInfo: {
    title: 'Scheduling'
  }
}
</script>
