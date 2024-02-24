<template>
  <v-app>
    <div class="main-page">
      <nav class="nav-page">
        <div class="ul-ul">
          <li><a href="/"></a>Home</li>
          <li><a href="/about"></a>About</li>
          <li><a href="/contact"></a>Contact</li>
        </div>
        <div style="width: 25%;">
          <h1 style="margin: 0; color: #37447E;">Landing</h1>
        </div>
        <div style="width: 25%;">
          <button class="btn">Buy now</button>
        </div>
      </nav>
      <div class="text-page">
        <div class="header-1">
          <h1 style="margin: 0; ">Introduce Your Product <br> Quickly & Effectively </h1>  
          <br> 
          <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatum, at sequi iusto eveniet, in nesciunt nisi porro voluptas molestiae et explicabo. Provident illum odit at vel laudantium debitis <br> <br> id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, doloremque. Lorem ipsum dolor sit amet.</p>
          <div class="button-1">
            <router-link to="/about"><button class="btn-1">Purchase UI Kit</button></router-link>
            <button class="btn-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div class="second-page">
      <div class="first-section">
        <div class="headline">
          <router-link to="/lightview"  style="text-decoration: none"><h2>Light, Fast & Powerful</h2></router-link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quod ex impedit tempora praesentium excepturi repellat id, tenetur nam nesciunt, vitae optio natus aut veniam possimus placeat qui voluptatum. Quae. <br> <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, facere! Quidem praesentium optio error rerum.</p>
        </div>
        <div class="first-icon">
          <div>
            <img src="@/assets/Icon.png">
            <h4>Title Goes Here</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo exercitationem dignissimos nihil aut omnis?</p>
          </div>
          <div style="margin-right: 2rem;">  
            <img src="@/assets/Icon.png">
            <h4>Title Goes Here</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maxime esse. quod iusto nemo.</p>
          </div>
        </div>
      </div>  
      <div class="second-section">
        <img src="@/assets/undraw_mobile_login_ikmv.png">
      </div>  
    </div>
    <div class="third-page">
      <div class="picture-part-1">
        <img src="@/assets/undraw_happy_news_hxmt.png" style="width: 40vw">
      </div>
      <div class="third-section">
        <div class="headline" style="width: 65%; margin-left: 10rem">                                  
          <h2>Light, Fast & Powerful</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quod ex impedit tempora praesentium excepturi repellat id, tenetur nam nesciunt, vitae optio natus aut veniam possimus placeat qui voluptatum. Quae. <br> <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, facere! Quidem praesentium optio error rerum.</p>
        </div>
      </div>
    </div>
    <div class="fourth-page">
      <div class="picture-part-2">
        <img src="@/assets/undraw_social_influencer_sgsv.png" style="width: 40vw">
      </div>
      <div class="fourth-section">
        <div class="headline" style="width: 65%; margin-left: 10rem;">                                  
          <h2>Light, Fast & Powerful</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quod ex impedit tempora praesentium excepturi repellat id, tenetur nam nesciunt, vitae optio natus aut veniam possimus placeat qui voluptatum. Quae. <br> <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, facere! Quidem praesentium optio error rerum.</p>
        </div>
      </div>
    </div>
    <div class="fifth-page">
      <div class="picture-part-3">
        <img src="@/assets/undraw_mention_6k5d.png" style="width: 40vw">
      </div>
      <div class="fifth-section">
        <div class="headline" style="width: 65%; margin-left: 10rem;">                                  
          <h2>Light, Fast & Powerful</h2>
          <p style="margin-top: 3rem;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quod ex impedit tempora praesentium excepturi repellat id, tenetur nam nesciunt, vitae optio natus aut veniam possimus placeat qui voluptatum. Quae. <br> <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, facere! Quidem praesentium optio error rerum.</p>
          <div style="display: flex; margin-top: 4rem;">
            <button class="btn-3">Purchase Now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="sixth-page">
      <div class="content-part">
        <h2 style="color: #091133;">A Price To Suit Everyone</h2>
        <p style="color: #6F7CB2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus totam error sequi ut ullam cupiditate quidem autem a vitae ad ratione, maiores quia expedita? Magnam voluptatum commodi vero nisi est quasi</p>
        <h1 style="margin: 0; margin-top: 3rem;">$40</h1> 
        <h4 style="margin: 0; color: #6F7CB2">UI Design Kit</h4>
        <p style="margin-top: 3rem; color: #6F7CB2">See, One price. Simple.</p>  
        <button class="btn-4">Purchase Now</button>
      </div>
    </div>
    <div class="footer-page">
      <div class="first-footer">
        <p style="margin: 0; color: #939EA4;">©2023 Yourcompany</p>
        <h1 style="margin: 0; color: #37447E;">Landing</h1>
        <div>
          <button class="btn-5">Purchase Now</button>
        </div>
      </div>
      <div style="width: 80%; background-color: #CDD1D4; height: 0.2vh; margin-top: 3rem; margin-bottom: 2rem;"></div>
      <div class="nav-footer">
        <div class="ul-footer">
          <li><a href="/"></a>Home</li>
          <li><a href="/about"></a>About</li>
          <li><a href="/contact"></a>Contact</li>
        </div>
        <div class="icon-footer">
          <div class="img-footer">
            <img src="@/assets/Instagram Copy 4.png">
          </div>
          <div class="img-footer">
            <img src="@/assets/Instagram Copy 3.png">
          </div>
          <div class="img-footer">
            <img src="@/assets/Instagram Copy 2.png">
          </div>
          <div class="img-footer">
            <img src="@/assets/Instagram Copy.png">
          </div>
          <div class="img-footer"> 
            <img src="@/assets/Instagram.png">
          </div>
        </div>
      </div>
    </div>  
  </v-app>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
  /* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */
  /* main-page */
  .main-page{
    background-image: url(@/assets/designer_1.png);
    background-position: right;
    background-repeat: no-repeat;
    background-size: 69%;
    width: 100%;
    height: 140vh;
    margin: auto;
  }
  .nav-page{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 80%;
    margin: auto;
  }
  .ul-ul{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
  }
  .ul-ul li{    
    list-style: none;
    margin-right: auto;
    color: #505F98;
    cursor: pointer;
  }
  .ul-ul li:hover{
    color: rgb(2, 91, 255);
  }
  .btn{
    background-color: #111B47;
    color: white;
    width: 55%;
    height: 3vh;
    cursor: pointer;
  }
  /* text-page */
  .header-1{
    width: 80%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-top: 50vh;
    text-align: left;
  }
  .header-1 h1{
    font-size: 3rem;
  }
  .header-1 p{
    font-size: large;
    width: 45%;
  }
  .button-1{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5rem;
  }
  .btn-1{
    background-color: #111B47;
    color: white;
    border: none;
    width: 10vw;
    height: 5vh;
    cursor: pointer;
  }
  .btn-2{
    background: fixed;
    color: #111B47;
    width: 12vw;
    margin-left: 4rem;
    height: 5vh;
    cursor: pointer;
  }
  /* second-page */
  .second-page{
    width: 80%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .headline h2{
    text-align: left;
    color: #091133;
    font-size: 2rem;
  }
  .headline p{
    text-align: left;
    color: #6F7CB2;
  }
  /* icon page */
  .first-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    margin-top: 4rem;
  }
  .first-icon h4{
    color: #091133;
  }
  .first-icon p{
    color: #6F7CB2;
  }
  /* third-page */
  .third-page{
    width: 80%;
    height: 70vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* fourth-page */
  .fourth-page{
    width: 80%;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  /* fifth-page */
  .fifth-page{
    width: 80%;
    height: 80vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
  .btn-3{
    background-color: #111B47;
    color: white;
    border: none;
    width: 10vw;
    height: 5vh;
    cursor: pointer;
  }
  /* sixth-page */
  .sixth-page{
    background-image: url(@/assets/Rectangle.png);
    background-size: 100%;
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-4{
    background-color: #111B47;
    color: white;
    border: none;
    width: 10vw;
    height: 5vh;
    cursor: pointer;
  }
  .content-part{
    margin-top: 3rem;
    width: 45%;
    text-align: center;
  }
  /* FOOTER */
  .footer-page{
    background-image: url(@/assets/Rectangle-1.png);
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .first-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
  .nav-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
  .ul-footer{
    display: flex;
  }
  .ul-footer li{
    list-style: none;
    margin-right: 5rem;
    color: #929ECC;
  }
  .icon-footer{
    display: flex;
  }
  .img-footer{
    margin-left: 2rem;
  }
  .btn-5{
    background-color: #111B47;
    color: white;
    border: none;
    width: 10vw;
    height: 5vh;
    cursor: pointer;
  }
  @media screen and (max-width: 650px) {
    .main-page{
      width: 100%;
      height: 65vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .nav-page{
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: small;
    }
    .btn{
      width: 100%;
    }
    .header-1{
      padding: 4rem;
    }
    .header-1 h1{
      font-size: larger;
    }
    .header-1 p{
      font-size: small;
    }
    .btn-1{
      width: 80%;
    }
    .btn-2{
      margin-left: 0;
      width: auto;
    }
    .second-page{
      width: 80vw;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: small;
    }
    .third-page{
      height: 70vh;
      width: 80%;
      margin-top: 2rem;
      font-size: small; 
      margin: auto;
    }
    .headline h2{
      font-size: 1.5rem;
    }
    .headline{
      margin: 0 !important;
      width: 100%;
      height: auto;
      font-size: small;
    }
    .third-section{
      margin: auto;
      width: 100%;
      height: 30vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fourth-page{
      margin-top: 0;
    } 
    .fourth-section{
      width: 100%;
      height: 30vh;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fifth-page{
      margin-top: 0;
    }
    .fifth-section{
      width: 100%;
      height: 10vh;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;  
    }
    .btn-3{
      width: 70%;
      height: 35px;
      cursor: pointer;
    }
    .sixth-page{
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 70vh;
    }
    .content-part{
      margin-top: 0;
      font-size: small;
      width: 80%;
    }
    .content-part h1{
      margin-top: 20px !important;
    }
    .content-part p{
      margin-top: 15px !important;
    }
    .btn-4{
      width: 20%;
      height: 35px;
    }
    .footer-page{
      height: 200px;
      font-size: small;
    }
    .ul-footer li{
      margin: 15px !important;
    }
    .btn-5{
      width: 80%;
      height: auto;
    }
  }

</style>