<template>
  <div class="apple-retail">
     <div class="potheader">
    <h2>行业痛点</h2>
    <p>Pains of Industry</p>
    </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide init">
        <div class="inner">
          <figure><img src="../../../assets/solution/cwym.jpg"></figure>
          <div class="gallery-item-desc">
            <h3 class="typography-label">停车位难求</h3>
           <!-- <p class="typography-body">参加我们的实际操作互动课程，与影响广泛的艺术家、音乐家、开发者和企业家开展交流。</p> -->
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="inner">
          <figure><img src="../../../assets/solution/rgsf.jpg"></figure>
          <div class="gallery-item-desc">
            <h3 class="typography-label">人工收费频繁</h3>
          <!--  <p class="typography-body">探索如何拍摄出你乐于分享的照片和视频。这里有“光影漫步”、“光影实验室”、“Pro 行家讲座”和“进阶讲座”等各种课程等你参加。</p> -->
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="inner">
          <figure><img src="../../../assets/solution/cllt.jpg"></figure>
          <div class="gallery-item-desc">
            <h3 class="typography-label">车辆乱停，稽查困难</h3>
          <!--  <p class="typography-body">你可以参加“进阶讲座”和“音乐实验室”等课程，开始创作属于自己的节拍；也可以参加“Pro 行家讲座”课程，让自己的音乐制作能力更进一步。</p> -->
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="inner">
          <figure><img src="../../../assets/solution/zycw.jpg"></figure>
          <div class="gallery-item-desc">
            <h3 class="typography-label">电动车乱放，占用车位</h3>
           <!-- <p class="typography-body">来编写你的第一行代码，这比你想象的要容易多了。我们有“课外一小时”、“夏令营”、“进阶讲座”等各种课程，来教你学习如何编程。</p> -->
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="inner">
          <figure><img src="../../../assets/images/event_5_large.jpg"></figure>
          <div class="gallery-item-desc">
            <h3 class="typography-label">艺术和设计</h3>
           <!-- <p class="typography-body">参加我们的“现场艺术创作”、“户外写生”、“课外一小时”和“进阶讲座”等课程，开始你的新创作。</p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <!--左箭头-->
    <div class="swiper-button-next"></div>
    <!--右箭头-->
  </div>
</div>
</template>

<script>
  import Swiper from "swiper"

  export default {

    mounted() {
          var swiper = new Swiper('.swiper-container', {
              	speed: 700,
                 spaceBetween: -100,
                slidesPerView : 3,
              	centeredSlides: true,
                autoplay:true,
              	on: {
              		init: function() {
              			this.slides.removeClass('init');
              		},



              	},
              	navigation: {
              		nextEl: '.swiper-button-next',
              		prevEl: '.swiper-button-prev',
              	},

              });
              swiper.$el.parent('.apple-retail')[0].onmouseover = function() {
              	swiper.$el.addClass('mouse-hover');
              };
              swiper.$el.parent('.apple-retail')[0].onmouseout = function() {
              	swiper.$el.removeClass('mouse-hover');
              };
    }


  }


</script>

<style scoped="scoped">
  @import url('../../../assets/css/swiper.min.css');

    .potheader{
      padding-left: 130px;
    }

    .swiper-container{
      margin-top: -50px;
      padding-top: 130px;
      height: 550px  !important;
    }

    h2{
    padding-left: 30px;
    text-align: left;
    color: #477e9a;
    font-size: 30px;
    font-weight: bolder;
   }


   p{
   padding-left: 30px;
  color: #555;
  text-align: left;
  font-size: 30px;
  line-height: 36px;
  font-family: "itcavantgardepro-bk";
  position: relative;
   }


  .apple-retail {
   /* height: 600px !important; */
  	/* margin: 30px 0; */
    width: 1200px !important;
    height: 650px;
  }
  .swiper-slide {
  	text-align: center;
      padding: 0 calc((100vw - 1500px) * .15);
  	width: 700px;
     transform: scale(0.5);
  }
  .inner figure {
  	margin-top: -150px !important;
  	width: 100%;
  }
  .inner figure img {
  	width: 600px;
    height: 400px;
  	border-radius: 6px;
  }
  .gallery-item-desc {
  	width: 80%;
  	text-align: left;
  	display: inline-block;

  	opacity: 0;
  	transition-duration: 1.2s;
  }
  .init .gallery-item-desc {
  	opacity: 1;
  }
  .gallery-item-desc h3 {
  	line-height: 1.16667;
  	font-weight: 600;
  	letter-spacing: .009em;
  	color: #111;
  	font-size: 20px;
  }
  .gallery-item-desc p {
  	margin-top: 0px;
  	color: #333;
  	font-size: 15px;
  }
  .swiper-slide-active,.swiper-slide-duplicate-active{
      transform: scale(1);
  }

  .swiper-slide-prev .gallery-item-desc {
  	transform: translateX(-70px);
  }
  .swiper-slide-next .gallery-item-desc {
  	transform: translateX(70px);
  }
  .swiper-slide-active .gallery-item-desc {
  	opacity: 1;
  	transform: translateX(0);
  }
  /* @media only screen and (max-width: 1068px) {
  .swiper-slide {
      padding:0 calc((100vw - 576px) * .15);
  	width: 576px;
  }
  .gallery-item-desc {
  	padding-top: 0px;
  }
  }
 @media only screen and (max-width: 735px) {
  .swiper-slide {
  	transform: scale(.9);
  	padding: 0;
  	width: 85vw;
  	margin: 0 0;
  	min-width: 272px;
  }
  .swiper-slide-active {
  	transform: scale(1);
  }
  .gallery-item-desc {
  	padding-top: 26px;
  	width: 90%;
  }
} */
  /* .swiper-button-next, .swiper-button-prev {
  	top: 40%;

  	background-color: rgba(210,210,210,.6);
  	background-size: 15px 15px;
  	border-radius: 50%;
  	width: 52px;
  	height: 52px;
  	transition: all .5s;
  	outline: none;
  	opacity: 0;
  } */
  /* .mouse-hover .swiper-button-next, .mouse-hover .swiper-button-prev {
  	opacity: 1;
  } */
/*  .swiper-button-next:hover, .swiper-button-prev:hover {
  	background-color: rgba(210,210,210,.8);
  }
  .swiper-button-next {
  	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
  	right: 20px;
  }
  .swiper-button-prev {
  	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
  	left: 20px;
  }
  .swiper-container .swiper-button-next.swiper-button-disabled, .swiper-container .swiper-button-prev.swiper-button-disabled {
  	opacity: 0;

  } */

</style>
