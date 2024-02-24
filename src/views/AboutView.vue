<template>
  <v-app>
    <div class="hero-page">
      <div class="first-section">
        <div class="body-part">
          <div class="headline">
            <h1 style="font-size: 2.5rem; color: #091133;">Design & Build Your Own Landing Pages</h1>
            <p style="color: #6F7CB2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis amet dolorem libero est natus id iure labore perspiciatis numquam eos blanditiis laborum eveniet eius quaerat explicabo atque, maiores quas ratione magni inventore <br> <br> soluta ipsum! Similique, debitis, magni, distinctio inventore cumque ducimus odio suscipit illo accusantium incidunt dolor nam excepturi reprehenderit.</p>
          </div>
          <div class="icon-part">
            <div class="i-section">
              <div>
                <div class="icons">
                  <img src="@/assets/Icon.png">
                  <h2>Title Goes Here</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia eaque omnis quae impedit iure.</p>  
                </div>
                <div class="icons" style="margin-top: 2rem;">
                  <img src="@/assets/Icon.png">
                  <h2>Title Goes Here</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia eaque omnis quae impedit iure.</p>  
                </div>
              </div>
              <div style="margin-left: 2rem;">
                <div class="icons">
                  <img src="@/assets/Icon.png">
                  <h2>Title Goes Here</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia eaque omnis quae impedit iure.</p>
                </div>
                <div class="icons" style="margin-top: 2rem;">
                  <img src="@/assets/Icon.png">
                  <h2>Title Goes Here</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia eaque omnis quae impedit iure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="second-section">
        <img src="@/assets/Samsung.png">
      </div>
    </div>
  </v-app>
</template>

<style scoped>
  .hero-page{
    display: flex;
    width: 80%;
    margin: auto;
  }
  .first-section{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headline{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    width: 80%;
  }
  .i-section{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 80%;
    margin-top: 2rem;
  }
  .icons{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .icons p{
    margin: 0;
    color: #6F7CB2;
  }
  .icons h2{
    margin-bottom: 0.3rem;
    color: #091133;
  }
</style>
