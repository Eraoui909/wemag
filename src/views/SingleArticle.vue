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
                  <img src="../assets/logo/logo_small.png" alt="author-thumb">
                </li>
                <li class="list-inline-item">
                  <a href="#">WeMag</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">August 8, 2021</a>
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
                      <img class="d-block w-100 img-fluid" :src="require(`../assets/activities/${pic}`)" alt="activity image">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <!-- Paragrapgh -->
              <p>{{ this.article.description }}</p>
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
  data: function () {
    return {
      "news" : {
        1 :{
          "id": 1,
          "title" : "Kick off meeting",
          "description" : "",
          "date" : "4 February 2021",
          "picture" :[
            "kick-off-1.png",
            "kick-off-2.png",
            "kick-off-3.png"]

        },
        2: {
          "id": 2,
          "title" : "Focus Groups conducted",
          "description" : "Focus Groups conducted with female students, teachers and administration staff under the supervision of MBS",
          "date" : "April 12th and 19th 2021",
          "picture" :[
            "mbs-1.png",
            "mbs-2.png",
            "mbs-3.png",
            "mbs-4.png",
            "mbs-5.png",
            "mbs-6.png"]
        },
        3: {
          "id": 3,
          "title" : "Projets CBHE/Tempus",
          "description" : "Cluster Meeting des projets CBHE/Tempus dans le domaine de : \" Entrepreneuriat et Employabilité\" »",
          "date" : "08 July 2021 à Rabat",
          "picture" :[
            "Erasmus-4.jpg",
            "Erasmus-5.jpg",
            "Erasmus-6.jpg",
            "Erasmus-7.jpg",
            "Erasmus-8.jpg",
            "Erasmus-9.jpg"]
        },
        4: {
          "id": 4,
          "title" : "Cluster meeting of new Erasmus",
          "description" : 'Cluster meeting of new Erasmus + CBHE projects Selection 2020 “Getting started and preparing for next steps”',
          "date" : "October 12th 2021",
          "picture" :[
            "CBHE-1.png"]
        }
      },
      "article":{
        "id" : "",
        "title" : "",
        "description" : "",
        "date" : "",
        "picture" : ""
      }
    }
  },
  created() {
    let article_id = this.$route.params.id;
    for (const index in this.news){
      if(article_id === index){
        this.article = this.news[parseInt(index)];
        console.log(this.article)
        break;
      }
    }
  }
}
</script>

<style scoped>

</style>