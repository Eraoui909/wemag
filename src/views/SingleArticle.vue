<template>
  <section class="section blog-single">
    <div class="container">
      <div class="row">
        <div class="col-md-10 m-auto">
          <!-- Single Post -->
          <article class="single-post">
            <!-- Post title -->
            <div class="post-title text-center">
              <h1>{{ this.article.title }}</h1>
              <!-- Tags -->
              <ul class="list-inline post-tag">
                <li class="list-inline-item">
                  <img src="../assets/logo/logo_small.png"  alt="author-thumb">
                </li>
                <li class="list-inline-item">
                  <a href="#">WEMag</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">{{ this.article.date }}</a>
                </li>
              </ul>
            </div>
            <!-- Post body -->
            <div class="post-body">
              <!-- Feature Image -->
              <div class="feature-image">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div  v-bind:class="(index === 0) ? 'carousel-item active': 'carousel-item'"  v-for="(pic,index) in this.article.picture" v-bind:key="pic.id">
                      <center>
                        <img class="d-block w-100 img-fluid" :src="require(`../assets/activities/${pic}`)" style="max-width: 600px"  alt="activity image">
                      </center>
                    </div>
                  </div>
                  <a class="carousel-control-prev"  href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" style="background-color: #c3c3c3;" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next"  href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" style="background-color: #c3c3c3;" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <!-- Paragrapgh -->
              <p>{{ this.article.description }}</p>

              <!-- Content -->
              <div v-if="this.article.content">
                  <div v-html="this.article.content"></div>
              </div>

              <div v-if="this.article.pdf">
                <iframe :src="this.article.pdf" frameborder="0" width="100%" height="600px" ></iframe>
              </div>

            </div>
          </article>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "SingleArticle",
  beforeMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
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
        },
        988: {
          "id": 988,
          "title" : this.$t('posts.post_988.title'),
          "description" : this.$t('posts.post_988.description'),
          "date" : this.$t('posts.post_988.date'),
          "content" : this.$t('posts.post_988.content'),
          "picture" :[
            "event9_1.jpeg",
            "event9_2.jpeg",
            "event9_3.jpeg",
            "event9_4.jpeg",
            "event9_5.jpeg",
            "event9_6.jpeg",
            "event9_7.jpeg",
            "event9_8.jpeg",
            "event9_9.jpeg",
            "event9_10.jpeg",
            "event9_11.jpeg",
            "event9_12.jpeg",
            "event9_13.jpeg",
            "event9_14.jpeg",
            "event9_15.jpeg",
            "event9_16.jpeg",
            "event9_17.jpeg",
            "event9_18.jpeg",
            "event9_19.jpeg",
            "event9_20.jpeg"
          ]
        }
},
    }
  },
  created() {
    let article_id = this.$route.params.id;
    for (const index in this.news){
      if(article_id === index){
        this.article = this.news[parseInt(index)];
        break;
      }
    }
  }
}
</script>

<style scoped>

</style>