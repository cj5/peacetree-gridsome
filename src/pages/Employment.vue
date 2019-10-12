<template>
  <Layout>
    <div class="container header-pad">
      <h1>Employment</h1>
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
