<template>
  <div class="ha-about">
    <div class="ha-title">
      <h1>About Us</h1>
    </div>
    <div class="ha-content">
      <div class="ha-section">
        <p>
          WeMag is a Capacity Building project in the field of Higher Education. It involves 10
          institutions and 5 countries. Its overall goal is to improve young Maghrebin educated
          women’s self-employment prospects by providing them with entrepreneurial knowledge
          and access to business networks.
        </p>
      </div>
      <div class="ha-section">
        <p>
          The project is made of core activities, which expected results are broken down into Work
          Packages (WP 1-6) and linked to the target groups’ needs they are expected to meet. The
          methodology emphasizes a participatory approach with the project partners but also with
          the target group, in order to co-create an effective curriculum dedicated to promote female
          entrepreneurship.
        </p>
      </div>
      <div class="ha-section">
        <h3><strong>Main objective:</strong>Increase in the female entrepreneurship in Morocco and Tunisia</h3>
        <h3><strong>Specific objectives :</strong></h3>
        <ul>
          <li><strong>SO1:</strong> Improve entrepreneurial knowledge and promote the entrepreneurial spirit among young women in HEI in Morocco and Tunisia through a new curriculum and practical work</li>
          <li><strong>S02:</strong> Strengthen women’s professional networks for business creation</li>
          <li><strong>S03:</strong> Improve entrepreneurial teaching at HE level in Morocco and Tunisia</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsComponent"
}
</script>

<style scoped>

  .ha-content{
    margin: 10px auto;
    position: relative;
    width: 70%;
    text-align: justify;
    box-shadow: 0 7px 20px 0 rgb(0 0 0 / 8%);
    padding:5px 10px;
  }
  @media (max-width: 700px) {
    .ha-content{
      width: 90%;
    }
  }
  .ha-content p{
    font-size: 16px;
    letter-spacing: 0;
    line-height: 25px;
    color: #808080;
  }
  .ha-content .ha-section{
    margin: 40px auto;
  }
</style>