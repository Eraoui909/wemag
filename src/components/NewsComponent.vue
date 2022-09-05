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

        999:{
          "id": 999,
          "title" : "Kick off meeting",
          "description" : "",
          "date" : "4 February 2021",
          "picture" :[
            "kick-off-1.png",
            "kick-off-2.png",
            "kick-off-3.png"]

        },
        998: {
          "id": 998,
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
        997: {
          "id": 997,
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
        996: {
          "id": 996,
          "title" : "Cluster meeting of new Erasmus",
          "description" : 'Cluster meeting of new Erasmus + CBHE projects Selection 2020 “Getting started and preparing for next steps”',
          "date" : "October 12th 2021",
          "picture" :[
            "CBHE-1.png"]
        },
        995: {
          "id": 995,
          "title" : "1st \"Train the Trainers\" Session",
          "description" : "Hosted by University Sidi Mohamed Ben Abdellah",
          "date" : "5th to 9th - Septembre 2022",
          "picture" :[
            "Rollup.png"
          ]
        },

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