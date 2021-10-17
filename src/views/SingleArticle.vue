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
                <img class="img-fluid" src="../assets/backgrounds/img-principale.jpg" alt="feature-image">
              </div>
              <!-- Paragrapgh -->
              <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
              <p>Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
              <!-- Blockquote -->
              <div class="quote">
                <blockquote>
                  Design is not just what it looks like and feels like. Design is how it works.
                </blockquote>
              </div>
              <!-- Paragrapgh -->
              <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
              <!-- Post Image -->
              <div class="post-image text-center">
                <img class="img-fluid" src="images/blog/post-body-image.jpg" alt="post-body-image">
              </div>
              <!-- Paragrapgh -->
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
      "article":{
        "id" : "",
        "title" : "",
        "description" : "",
        "content" : "",
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