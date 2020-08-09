<template>
    <!-- Swiper -->
     <div class="swiper-container banner-swiperss">
       <div class="swiper-wrapper">
         <div class="swiper-slide ss">
           <img src="../../assets/bg/bj1.png" alt="">
         </div>
         <div class="swiper-slide ss">Slide 2</div>
         <div class="swiper-slide ss">Slide 3</div>
         <div class="swiper-slide ss">Slide 4</div>
         <div class="swiper-slide ss">Slide 5</div>
         <div class="swiper-slide ss">Slide 6</div>
         <div class="swiper-slide ss">Slide 7</div>
         <div class="swiper-slide ss">Slide 8</div>
         <div class="swiper-slide ss">Slide 9</div>
         <div class="swiper-slide ss">Slide 10</div>
       </div>
       <!-- Add Pagination -->
       <div class="swiper-pagination"></div>
     </div>


</template>

<script>
  import $ from 'jquery'
   import Swiper from "swiper"

export default {

    mounted() {
       var swiper = new Swiper('.banner-swiperss', {
            direction: 'vertical',
                       slidesPerView: 1,
                       spaceBetween: 30,
                       mousewheel: true,
                       pagination: {
                       el: '.swiper-pagination',
                       clickable: true,
                       },
          });
    }
  }

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="scoped">
   html,
      body {
        position: relative;
        height: 100%;
      }

      body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
      }

      .banner-swiperss {
        width: 100%;
        height: 100%;
      }

      .ss {
         height: 100% !important;
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
      img{
        height: 800px;
        width: 1600px;
      }
</style>
