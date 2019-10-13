<template>
  <Layout>
    <div class="scheduling-page">
      <section class="page-heading">
        <div class="container">
          <h1 class="heading">Scheduling</h1>
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
    title: 'Scheduling'
  }
}
</script>
