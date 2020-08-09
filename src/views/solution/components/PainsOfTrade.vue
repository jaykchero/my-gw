/* eslint-disable */
<template>
   <div class="all">
    <div class="potheader">
    <h2 class="animated slideInUp">行业痛点</h2>
    <p class="p animated slideInUp">Pains of Industry</p>
    </div>
     <!-- Swiper -->
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide init ">
             <img class="img" src="https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=FzC64-2KL2zB9cfp0gqflmprSmc&data=Rz0-ogiDyfssuGxPdVJSi_CJ6MPPeVD0Rdj2xwJs0MvwiyIptpmOGYnoXbPqXOsjDW_2Y6hC6syuKrWodOBEf7c3vNWyuhvzjG5SMaqpD9zY7Pf49Z4WGMUSG4JFv7cJCdqh1yISRMrNGldgiXt4olcE1uewFRTfwqVhYrtCtOBumTA7Lve8_tMmHqbPV3EdijN9GXmyEbKF1UDDw6uY2EfizckC0MnWVJFK9y9ZdqnQ1ow_GyGRe1CEjWjYTBCHa0DdCOdM40Ye0u6PSsetuP-fECWfgzh7ogOQelBG5KEuB4Fe4VZrzkxIMlDxk2yCoWG7sfpCFw&ts=1597053755702&w=1080&h=1080&r=0&_cachekey=1e9be162f21bd9a7d67a98240242a153" alt="">
             <p class="desc init ">车位已满</p>
           </div>
           <div class="swiper-slide"><img class="img" src="https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=j9845KLRp_3J3umAnRw1jCka1rY&data=Rz0-Zv59gyJmm1vPeRVw9saYpyFn1xlmYunVQKxO80OHxQwptv4_HBwxXL9SMERnWICPrWpC6syuKrWoqIu7OMEZDURylX884aVJQ7vkp9_Y7CXuASgYxK7L7zVBMsVdaqChrVYZRMreJ1Z3izgC3Xxw0uewFdApPO-4KJh1NOwpu00NP7heVn1vjIH-dPazqBD1bjecEbLiZEVWGqqUYCtNiZztqQcUVJFK9y8UpABTW-Mzm8x7bRAw-yx0TBCHa0DdCOdM40YeqJqESsdx0wDYZgsuEvhUxsz9sUs09eyGBIFfnGtrzkxIMlDxk2yCoWG7sfpCFw&ts=1597053731792&w=1080&h=1080&r=0&_cachekey=ba6efc04aa70777988c01ee884dd034e" alt=""> <p class="desc init">人工收费频繁</p></div>
           <div class="swiper-slide"><img class="img" src="https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=8S1sltzW9qkaBaHJ4QJVf8EOQ14&data=Rz0-nDMW4jwn3jQPDEQvbd0hArVfXsnKQipYrAaNzAzcom0ptrUuhEUin9HaO_ndMTNiBhBC6syuKrWoA51jZ2PU9E1U_usYqFEY0cNwb3fY7NBz81FgpaWEsOtik7_godGhvU0SRMqVJlomhnZ0xVh51uewFSrkV46mad0a9Jl45NYWhh3KbvS_IKE9-RoZay-6NVD9EbKpdd0PCWn66CDwM_VeRKxuVJFK9y9XryeMEYDkr1gtClvCfg1_TBCHa0DdCOdM40YeuIGPSsfaxdiHxMbXG94_Uui0RRqmjXhOrIFe-qNrzkxIMlDxk2yCoWG7sfpCFw&ts=1597053782375&w=1080&h=1080&r=0&_cachekey=5d0f3b4c896823ccdf1b14bbd43c7a43" alt=""><p class="desc init">车辆乱停</p></div>
           <div class="swiper-slide"><img class="img" src="https://ali.xmssdn.micloud.mi.com/2/1566455553514/get_thumbnail?sig=hAbHXXGkUdBP0gF5VfzCJRp8MUs&data=Rz0-TftQKk6mbNnBfBYnPY0EYUuPombrJQbHuATcKNTXULAptjqgM9pGPiZFIBQAcIQTtz9C6syuKrWoFwXnPBdWWtbRx_eb7jC5PES8iFLY7AOUr8IJ6vJIh2lJvJmCHQahiwkSRMrGI1JgkX9mxExxo-ewFfssEUbU6G_3Oukq7IZGo340vggQAcYRZg4bOstiPqIgEbIm-2qQbcgNdzsd7rTpNR1BVJFK9y-7O6FxSgAVpzxSbxLV75ZBTBCHa0DdCOdM40YejsWPSsfOXVzcsER5gFsGTmvyJLtLCrSpiYFe67hrzkxIMlDxk2yCoWG7sfpCFw&ts=1597053801001&w=1080&h=1080&r=0&_cachekey=0c3b23b77f6b66ceaa76f90ecdf6407a" alt=""><p class="desc init">电动车占用车位</p></div>
         </div>
       <!-- <div class="swiper-pagination"></div> -->
       </div>


     </div>

</template>

<script>
  import Swiper from "swiper"
  export default {
    mounted() {
     var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: -100,
          centeredSlides: true,
          autoplay:true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

          on: {
          	init: function() {
          		this.slides.removeClass('init');
          	},

          },


        });
    }
  }


</script>

<style scoped="scoped">
 /*   .all{
      height: 655;
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    } */

    .desc{
    display: inline-block;
  	opacity: 0;
  	transition-duration: 1.2s;
    }
    .init{
    	opacity: 1;
    }

  h2{

    padding-left: 150px;
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
   }
   .p{
    top: 130px;
    position: absolute;
   padding-left: 150px;
  color: #555;
  text-align: left;
  font-size: 30px;
  line-height: 36px;
  font-family: "itcavantgardepro-bk";

   }
    p{
      letter-spacing: .009em;
      color: #111;
      font-size: 20px;
      position: absolute;
      top: 460px;
      opacity: 1;
      z-index: 999;
       }


    html, body {
      position: relative;
      height: 600px !important;
      width: 1200px;

    }
    body {
     /* background: #eee; */
    /* background:url("../../../assets/bg/hytd.jpg") no-repeat; */
     background-size: 100%;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;

    }
    .img{
      /* border:2px solid #F79646; */
    }
    img{
      width: 600px;
      height: 400px;
    }

    .swiper-container {
      width: 100%;
      height: 100%;

    }
    .swiper-slide {
      position: relative;
      width: 600px;
      height: 500px;
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
	  transition: 300ms;
	  transform: scale(0.5);
    }
	.swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);

	}

  .desc {
  	width: 80%;
  	text-align: center;
  	display: inline-block;
  	opacity: 0;
  	transition-duration: 1.2s;
  }
  .init .desc {
  	opacity: 1;


  }

 .swiper-slide-prev .desc {
  	transform: translateX(-70px);
  }
  .swiper-slide-next .desc {
  	transform: translateX(70px);
  }
  .swiper-slide-active .desc {
  	opacity: 1;
  	transform: translateX(0);
  }

</style>
