<template>
  <Layout>
    <div class="container header-pad">
      <h1 class="heading">Scheduling</h1>
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
    title: 'Scheduling'
  }
}
</script>
