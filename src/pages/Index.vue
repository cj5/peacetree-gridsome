<template>
  <Layout>
    <div class="hero">
      <g-image :src="node.heroImage.file.url" />
      <div class="container">
        <h2 class="heading">{{ node.heroCopy }}</h2>
      </div>
      <div class="filter filter-1"></div>
    </div>
    <div class="container">
      <p style="margin-top: 70px;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa minima, praesentium tenetur porro nisi, perferendis quasi libero vel accusamus, quae eligendi illo esse iusto nihil culpa repellendus itaque fugit voluptate eveniet maxime soluta reprehenderit quam nulla. Accusamus blanditiis corporis non quaerat inventore eaque modi? Quo, neque pariatur sed earum ratione aspernatur. Maxime dolore cum deleniti quas blanditiis, repudiandae minima?</p>
    </div>
  </Layout>
</template>

<page-query>
{
  allContentfulHomePage {
    edges {
      node {
        heroCopy
        heroImage {
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
  computed: {
    node() {
      return this.$page.allContentfulHomePage.edges[0].node;
    }
  },
  // metaInfo: {
  //   title: 'Hello, world!'
  // }
}
</script>

