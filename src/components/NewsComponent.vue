<template>
  <section class="post-grid section pt-0">
    <div class="ha-title">
      <h1><span>N</span>ews</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="article in this.news" v-bind:key="article.id">
           <article  class="post-sm">
            <!-- Post Image -->
            <div class="post-thumb">
              <a :href="'/single-article/'+article.id"><img class="w-100" src="../assets/backgrounds/img-principale.jpg" alt="Post-Image"></a>
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
                  <a :href="'/single-article/'+article.id">Thomas Johnson</a>
                </li>
                <li class="list-inline-item">
                  {{ article.date }}
                </li>
              </ul>
            </div>
            <!-- Post Details -->
            <div class="post-details">
              <p>{{ article.description }}</p>
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
          "title" : "this is the title 1",
          "description" : "this the description of the news number 1",
          "content" : "this the content of the news number 1",
          "date" : "17-09-2021",
          "picture" : "img-principale.jpg"
        },
        2 : {
          "id": 2,
          "title" : "this is the title 2",
          "description" : "this the description of the news number 2",
          "content" : "this the content of the news number 2",
          "date" : "17-09-2021",
          "picture" : "@/assets/backgrounds/img-principale.jpg"
        },
        3 : {
          "id": 3,
          "title" : "this is the title 2",
          "description" : "this the description of the news number 2",
          "content" : "this the content of the news number 2",
          "date" : "17-09-2021",
          "picture" : "@/assets/backgrounds/img-principale.jpg"
        },
        4 : {
          "id": 4,
          "title" : "this is the title 2",
          "description" : "this the description of the news number 2",
          "content" : "this the content of the news number 2",
          "date" : "17-09-2021",
          "picture" : "@/assets/backgrounds/img-principale.jpg"
        },
        5 : {
          "id": 5,
          "title" : "this is the title 2",
          "description" : "this the description of the news number 2",
          "content" : "this the content of the news number 2",
          "date" : "17-09-2021",
          "picture" : "@/assets/backgrounds/img-principale.jpg"
        },
        6 : {
          "id": 6,
          "title" : "this is the title 2",
          "description" : "this the description of the news number 2",
          "content" : "this the content of the news number 2",
          "date" : "17-09-2021",
          "picture" : "@/assets/backgrounds/img-principale.jpg"
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
    box-shadow: 0px 12px 14px -6px rgb(0 0 0 / 22%) !important;
    background-color: white;
  }

  .ha-title{
    width: 80%;
    margin: 20px auto;
    text-align: start;
  }
  .ha-title h1{
    font-weight: bold;
    color: #31bdd4;
    padding: 5px;
    border-bottom: 6px #f292b2 solid;
    width: fit-content;
  }
  .ha-title h1 span{
    color: #f292b2;
  }

</style>