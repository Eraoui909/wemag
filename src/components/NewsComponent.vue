<template>
  <section class="post-grid section pt-0">
    <div class="ha-title">
      <h1><span>A</span>tivities</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="article in this.news" v-bind:key="article.id">

          <article  class="post-sm">
            <!-- Post Image -->
            <div class="post-thumb">
              <a :href="'/single-article/'+article.id">
                <img class="w-100 ha-article-img"
                     :src="require(`../assets/activities/${article.picture[0]}`)"
                     alt="Post-Image">
              </a>

            </div>
            <!-- Post Title -->
            <div class="post-title">
              <h3><a :href="'/single-article/'+article.id">{{ article.title }}</a></h3>
            </div>
            <!-- Post Meta -->
            <div class="post-meta">
              <ul class="list-inline post-tag">
                <li class="list-inline-item">
                  <img src="../assets/logo/logo_small.png" alt="author-thumb">
                </li>
                <li class="list-inline-item">
                  <a :href="'/single-article/'+article.id">WEMag</a>
                </li>
                <li class="list-inline-item">
                  {{ article.date }}
                </li>
              </ul>
            </div>
            <!-- Post Details -->
            <div class="post-details">
              <p>{{ article.description.substr(0,80) }}...</p>
            </div>
          </article>
          </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "NewsComponent",
  data: function () {
    return {
      "news" : {
        1 : {
          "id": 1,
          "title" : "Projets CBHE/Tempus",
          "description" : "Cluster Meeting des projets CBHE/Tempus dans le domaine de : \" Entrepreneuriat et Employabilité\" »",
          "date" : "08 juillet 2021 à Rabat",
          "picture" :["Erasmus-4.jpg",
            "Erasmus-5.jpg",
            "Erasmus-6.jpg",
            "Erasmus-7.jpg",
            "Erasmus-8.jpg",
            "Erasmus-9.jpg"]

        }
      },
    }
  },
  created() {
  }
}
</script>

<style scoped>

  .post-sm{
    box-shadow: 0 12px 14px -6px rgb(0 0 0 / 22%) !important;
    background-color: white;
  }



</style>