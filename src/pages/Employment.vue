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
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Employment'
  }
}
</script>
