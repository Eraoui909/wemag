<template>
  <div class="ha-about">
    <div class="ha-title">
      <h1>{{ $t('press_and_media') }}</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="article in news" v-bind:key="article.id">

          <article  class="post-sm">
            <!-- Post Image -->
            <div class="post-thumb">
              <a :href="article.url" target="_blank">
                <img class="w-100 ha-article-img"
                     :src="require(`../assets/medias/${article.picture[0]}`)"
                     alt="Post-Image">
              </a>

            </div>
            <!-- Post Title -->
            <div class="post-title" style="height: 100px;">
              <h3><a :href="article.url" target="_blank">{{ article.title.substr(0,90) }}...</a></h3>
            </div>
            <!-- Post Meta -->
            <div class="post-meta">
              <ul class="list-inline post-tag">
                <li class="list-inline-item">
                  <img src="../assets/logo/logo_small.png" alt="author-thumb">
                </li>
                <li class="list-inline-item">
                  <a :href="article.url" target="_blank">WEMag</a>
                </li>
                <li class="list-inline-item">
                  {{ article.date }}
                </li>
              </ul>
            </div>
            <!-- Post Details -->
            <div class="post-details">
              <p v-html="article.description"></p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "press_media",
  data: function () {
    return {
      "news" : {

        999:{
          "id": 999,
          "title" : this.$t('press_and_media_posts.post_999.title'),
          "description" : this.$t('press_and_media_posts.post_999.description'),
          "date" : this.$t('press_and_media_posts.post_999.date'),
          "url" : "https://www.universitatv.com/FR/dans-le-cadre-derasmus-wemag-la-fsjes-de-lusmba-de-fes-accueille-durant-5-jours-la-1ere-session-de-formation-des-formateurs-portant-sur-lentrepreneuriat-feminin",
          "picture" :[
            "universitat-wemag.jpg",]

        },
        998:{
          "id": 998,
          "title" : this.$t('press_and_media_posts.post_998.title'),
          "description" : this.$t('press_and_media_posts.post_998.description'),
          "date" : this.$t('press_and_media_posts.post_998.date'),
          "url" : "https://youtu.be/tfPnjxibweo",
          "picture" :[
            "ersmus-video-screen.png",]

        },


      },
    }
  },

}
</script>

<style scoped>
    .post-sm{
      box-shadow: 0 12px 14px -6px rgb(0 0 0 / 22%) !important;
      background-color: white;
    }
</style>