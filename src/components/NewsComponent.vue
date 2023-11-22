<template>
  <section class="post-grid section pt-0">
    <div class="ha-title">
      <h1>{{ $t('activities') }}</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="article in news" v-bind:key="article.id">

          <article  class="post-sm">
            <!-- Post Image -->
            <div class="post-thumb">
              <router-link :to="'/single-article/'+article.id">
                <img class="w-100 ha-article-img"
                     :src="require(`../assets/activities/${article.picture[0]}`)"
                     alt="Post-Image">
              </router-link>

            </div>
            <!-- Post Title -->
            <div class="post-title">
              <h3><router-link :to="'/single-article/'+article.id">{{ article.title }}</router-link></h3>
            </div>
            <!-- Post Meta -->
            <div class="post-meta">
              <ul class="list-inline post-tag">
                <li class="list-inline-item">
                  <img src="../assets/logo/logo_small.png" alt="author-thumb">
                </li>
                <li class="list-inline-item">
                  <router-link :to="'/single-article/'+article.id">WEMag</router-link>
                </li>
                <li class="list-inline-item">
                  {{ article.date }}
                </li>
              </ul>
            </div>
            <!-- Post Details -->
            <div class="post-details">
              <p>{{ article.description.substr(0,40) }}...</p>
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

        999:{
          "id": 999,
          "title" : this.$t('posts.post_999.title'),
          "description" : this.$t('posts.post_999.description'),
          "date" : this.$t('posts.post_999.date'),
          "picture" :[
            "kick-off-1.png",
            "kick-off-2.png",
            "kick-off-3.png"]

        },
        998: {
          "id": 998,
          "title" : this.$t('posts.post_998.title'),
          "description" : this.$t('posts.post_998.description'),
          "date" : this.$t('posts.post_998.date'),
          "picture" :[
            "mbs-1.png",
            "mbs-2.png",
            "mbs-3.png",
            "mbs-4.png",
            "mbs-5.png",
            "mbs-6.png"]
        },
        997: {
          "id": 997,
          "title" : this.$t('posts.post_997.title'),
          "description" : this.$t('posts.post_997.description'),
          "date" : this.$t('posts.post_997.date'),
          "picture" :[
            "Erasmus-4.jpg",
            "Erasmus-5.jpg",
            "Erasmus-6.jpg",
            "Erasmus-7.jpg",
            "Erasmus-8.jpg",
            "Erasmus-9.jpg"]
        },
        996: {
          "id": 996,
          "title" : this.$t('posts.post_996.title'),
          "description" : this.$t('posts.post_996.description'),
          "date" : this.$t('posts.post_996.date'),
          "picture" :[
            "CBHE-1.png"]
        },
        995: {
          "id": 995,
          "title" : this.$t('posts.post_995.title'),
          "description" : this.$t('posts.post_995.description'),
          "date" : this.$t('posts.post_995.date'),
          "picture" :[
          "event1-1.jpeg",
            "Rollup.png",
            "event1-2.jpeg",
            "event1-3.jpeg",
            "event1-4.jpeg",
            "event1-5.jpeg",
            "event1-6.jpeg",
            "event1-7.jpeg",
            "event1-8.jpeg",
            "event1-9.jpeg",
            "event1-10.jpeg",
            "event1-11.jpeg",
            "event1-12.jpeg",
            "event1-13.jpeg"
          ]
        },
        994: {
          "id": 994,
          "title" : this.$t('posts.post_994.title'),
          "description" : this.$t('posts.post_994.description'),
          "date" : this.$t('posts.post_994.date'),
          "picture" :[
            "event4-1.jpg",
            "event4-2.jpg",
            "event4-3.jpg",
            "event4-4.jpg",
            "event4-5.jpg",
            "event4-6.jpg",
            "event4-7.jpg"
          ]
        },
        993: {
          "id": 993,
          "title" : this.$t('posts.post_993.title'),
          "description" : this.$t('posts.post_993.description'),
          "date" : this.$t('posts.post_993.date'),
          "picture" :[
            "event6-1.jpg",
            "event6-2.jpg",
            "event6-3.jpg",
            "event6-4.jpg",
            "event6-5.jpg",
            "event6-6.jpg",
            "event6-7.jpg",
            "event6-8.jpg",
            "event6-9.jpg",
            "event6-10.jpg",
            "event6-11.jpg",
            "event6-12.jpg",
            "event6-13.jpg",
            "event6-14.jpg",
            "event6-15.jpg",
            "event6-16.jpg",
            "event6-17.jpg",
            "event6-18.jpg",
            "event6-19.jpg",
            "event6-20.jpg",
            "event6-21.jpg",
            "event6-22.jpg"
          ]
        },
        992: {
          "id": 992,
          "title" : this.$t('posts.post_992.title'),
          "description" : this.$t('posts.post_992.description'),
          "date" : this.$t('posts.post_992.date'),
          "picture" :[
            "event2-1.jpg",
            "event2-2.jpg",
            "event2-3.jpg"
          ]
        },
        990: {
          "id": 990,
          "title" : this.$t('posts.post_990.title'),
          "description" : this.$t('posts.post_990.description'),
          "date" : this.$t('posts.post_990.date'),
          "content": this.$t('posts.post_990.content'),
          "pdf": "wemag-program-final.pdf",
          "picture" :[
            "event5-1.jpg",
            "event5-2.jpg",
            "event5-3.jpg",
            "event5-4.jpg",
            "event5-5.jpg",
            "event5-6.jpg",
            "event8-1.jpeg",
            "event8-2.jpeg",
          ]
        },
        989: {
          "id": 989,
          "title" : this.$t('posts.post_989.title'),
          "description" : this.$t('posts.post_989.description'),
          "date" : this.$t('posts.post_989.date'),
          "picture" :[
            "event3-1.jpg",
            "event3-2.jpg",
            "event3-3.jpg",
            "event3-4.jpg",
            "event3-5.jpg",
            "event3-6.jpg",
            "event3-7.jpg",
            "event3-8.jpg",
            "event3-9.jpg",
            "event3-10.jpg",
            "event3-11.jpg",
            "event3-12.jpg",
            "event3-13.jpg",
            "event3-14.jpg"
          ]
        }

      },
    }
  },
  methods: {

  }
}
</script>

<style scoped>

  .post-sm{
    box-shadow: 0 12px 14px -6px rgb(0 0 0 / 22%) !important;
    background-color: white;
  }



</style>