<template>
  <Layout>
    <div class="employment-page">
      <section class="page-heading">
        <div class="container">
          <h1 class="heading">Employment</h1>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
{
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
  metaInfo: {
    title: 'Employment'
  }
}
</script>
