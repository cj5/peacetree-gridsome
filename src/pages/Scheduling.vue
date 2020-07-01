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
            <a :href="`tel:${formatPhone(staticGlobal.phoneNumber)}`">{{ staticGlobal.phoneNumber }}</a>
          </div>
          <div class="flex mt-8">
            <div class="flex-20 item-1">
              <g-image :src="staticGlobal.companyLogo.file.url" />
            </div>
            <div>
              <h2 class="heading-2" v-html="staticScheduling.sessionInfoHeading"></h2>
              <p v-html="staticScheduling.sessionInfoCopy"></p>
            </div>
          </div>
        </div>
      </section>
      <section class="scheduling-info bg-img">
        <div class="mxw-820 mt-5">
          <div 
            v-for="(i, key) in infoSectionContent"
            :key="key"
            class="info-section card"
          >
            <h3 class="subheading">{{ i.heading }}</h3>
            <p v-html="i.copy"></p>
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
        sessionInfoHeading
        sessionInfoCopy
        costHeading
        costCopy
        paymentHeading
        paymentCopy
        cancellationPolicyHeading
        cancellationPolicyCopy
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
  name: 'Scheduling',
  computed: {
    staticScheduling() {
      return this.$page.allContentfulSchedulingPage.edges[0].node
    },
    staticGlobal() {
      return this.$page.allContentfulGlobal.edges[0].node
    },
    infoSectionContent() {
      return [
        {
          heading: this.staticScheduling.costHeading,
          copy: this.staticScheduling.costCopy
        },
        {
          heading: this.staticScheduling.paymentHeading,
          copy: this.staticScheduling.paymentCopy
        },
        {
          heading: this.staticScheduling.cancellationPolicyHeading,
          copy: this.staticScheduling.cancellationPolicyCopy
        }
      ]
    }
  },
  methods: {
    formatPhone(number) {
      return number.replace(/\D/g,'')
    }
  },
  metaInfo: {
    title: 'Scheduling'
  }
}
</script>
