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
                  <a href="#">WiMag</a>
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
              <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
              <p>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

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