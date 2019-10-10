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
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, et beatae tempora alias ad magni iure nihil. Sequi, autem. Tempore facilis odit quam quasi iste ipsa nulla officia autem voluptas dolorem illo labore possimus, asperiores eligendi error sunt animi fugit est sed quibusdam a blanditiis! Mollitia quos perspiciatis, possimus repellat vero perferendis tenetur quibusdam maxime molestias pariatur? Quisquam assumenda illo adipisci autem sunt aperiam natus a veritatis! Vero labore unde, id illo in autem blanditiis totam similique nisi alias. Similique porro recusandae id. Quisquam ullam sunt in similique tenetur voluptatum dolor nam quasi, maiores, consequuntur error recusandae. Architecto culpa sed nihil, distinctio tenetur a sequi porro. Consequuntur architecto necessitatibus praesentium minus tempore quam temporibus, eius libero quas. Nihil, id laborum ducimus libero, placeat suscipit ipsa qui nesciunt officiis debitis consectetur distinctio dolores optio veritatis tenetur eum voluptate aliquam dolorem sunt, a odit dolorum cupiditate labore! Ipsum pariatur sunt corporis rerum consequatur provident! Cupiditate consequatur temporibus ipsum error, exercitationem ab quas? Et eos quibusdam eveniet animi, tempora esse expedita, excepturi natus itaque ex odit nemo? Voluptatum inventore, placeat iure soluta doloremque consequuntur iusto aut asperiores voluptate suscipit earum hic nemo temporibus cum harum deserunt adipisci maxime eius laborum facilis sed. Id commodi, doloribus numquam deserunt nihil cupiditate laborum veritatis dicta nesciunt cum? Velit, exercitationem modi ad vel itaque ea nesciunt deleniti ratione mollitia sunt officia, quos delectus. Tenetur rem dignissimos veritatis doloremque asperiores tempora iste reprehenderit eos alias veniam sed error iure rerum earum sunt ratione reiciendis, beatae incidunt possimus voluptate ipsum numquam! Vitae tempora reiciendis culpa? Impedit tenetur sint quas at rerum! Quisquam soluta atque, perferendis quo sunt voluptas repellendus vero, vitae rerum nam harum eos eum quam impedit aspernatur, accusamus nulla ipsa doloribus qui repellat non corporis illum optio accusantium. Cumque reprehenderit hic voluptates! Quasi voluptatem aspernatur ab similique!</p>
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

