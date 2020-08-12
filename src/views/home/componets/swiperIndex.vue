<template>
<div>
    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
         <div class="swiper-slide slide-one">
            <h2>111111111111</h2>
           </div>
        <div class="swiper-slide slide-two">
            <h2>22222222222222</h2>
        </div>
        <div class="swiper-slide slide-three">
            <h2>33333333333</h2>
        </div>
        <div class="swiper-slide slide-four">
            <h2>444444444444444</h2>

        </div>

      </div>
      <div class="swiper-pagination animated slideInUp"></div>
      <div class="swiper-button-prev animated slideInUp"></div>
      <div class="swiper-button-next animated slideInUp"></div>
    </div>

</div>

</template>

<script>
  import Swiper from "swiper"

  

  export default {

     components:{
       //pro
     },

    date () {
      return {
        left:{},
      }
    },


    mounted() {
      console.log(this.img1)
      this.left = Array.from(document.getElementsByClassName('banner-swiper'))
      document.addEventListener('scroll', this.handleScroll4)
      var swiper = new Swiper('.banner-swiper',{
      		  autoplay: {
      			delay: 5000,
      			disableOnInteraction: false,
      		  },
      		  speed: 700,
      		  //allowTouchMove: false,
      		  lazy: {
      			loadPrevNext: true,
      			loadPrevNextAmount: 3,
      		  },
      		  centeredSlides: true,
      		  spaceBetween : 30,
      		  slidesOffsetBefore: 40,
      		  loop: true,
      		  slidesPerView : 'auto',
      		  on: {
      			slideChangeTransitionEnd: function(){
      			  this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
      			},
      			slideChangeTransitionStart: function(){
      			  this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
      			},
      		  },
      		  pagination: {
      		  			el: '.swiper-pagination',
      		  			clickable :true,
      		  			renderBullet: function (index, className) {
      		                return '<div class="' + className + '"><span></span><i></i></div>';
      		              },
      		  		  },
      		  navigation: {
      			nextEl: '.swiper-button-next',
      			prevEl: '.swiper-button-prev',
      		  },
      		});
      		window.onresize=function(){
      		  swiper.update();
      		}
    }


  }
</script>

<style scoped="scoped">
@import url('../../../assets/css/swiper.min.css');


    .slide-one {
      height: 600px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/bj1.png) no-repeat center;
      background-size: cover;
    }
    .slide-two {
      height: 600px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/bj2.png) no-repeat center;
      background-size: cover;
    }
    .slide-three {
      height: 600px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/bj3.png) no-repeat center;
      background-size: cover;
    }
    .slide-four {
      height: 600px !important;
      background: url(http://qexz4xnye.hn-bkt.clouddn.com/bj4.png) no-repeat center;
      background-size: cover;
    }


    img{

      height: 600px !important;
    }

body {
      margin: 0;
    }
	h2{
	  font-family: -webkit-pictograph;
	  font-size:30px;
	  font-style:italic;
	  text-align:center;
    }
    .swiper-container {
	    padding-bottom:40px;
    }
	.swiper-wrapper{
	}
    .swiper-slide {
	    width:978px;
		transition-timing-function:linear;
    }
	@media only screen and (max-width:1200px){
	    .swiper-slide {
	        width:770px;
        }
	}
	@media only screen and (max-width:980px){
	    .swiper-slide {
	        width:471px;
        }
	}
	@media only screen and (max-height:480px){
	    .swiper-slide {
	        width:471px;
        }
	}
	.swiper-slide img{
		width:100%;
		border-radius: 4px;}
	.swiper-slide .title{
		position:absolute;
		transform:rotate(90deg);
		transform-origin:left top;
		left:-3px;
		font-size:11px;
		color: rgb(102, 102, 102);}
   .swiper-button-next, .swiper-button-prev{
  		width:86px;
  		height:112px;
  		background-size:86px 112px;
  		margin-top:-56px;
  		outline:none;}
	.swiper-button-next{
		background-image:url(../../../assets/img/cursor-next.png);}
	.swiper-button-prev{
		background-image:url(../../../assets/img/cursor-prev.png);}
	.swiper-pagination-bullet{
		background:none;
		opacity:1;
		margin:0 6px !important;
		width:9px;
		height:9px;
		position:relative;
		outline:none;
		vertical-align:middle;}
	.swiper-pagination-bullet span{
		width:3px;
		height:3px;
		background:#CCC;
		display:block;
		border-radius:50%;
		margin-top:3px;
		margin-left:3px;
	}
	.swiper-pagination-bullet i{
		background:#000;
		height:1px;
		width:20px;
		position:absolute;
		top:4px;
		transform:scaleX(0);
		transform-origin:left;
		z-index:3;
		transition-timing-function:linear;
		}
	.swiper-pagination-bullet-active span,.swiper-pagination-bullet:hover span{
		width:9px;
		height:9px;
		margin-top:0;
		margin-left:0;
		background:#000;
		position:relative;
		z-index:1;
		}
	.swiper-pagination-bullet-active i{
		animation:middle 6s;
		}
	.swiper-pagination-bullet:first-child.swiper-pagination-bullet-active i{
		animation:first 6s;
		}
	.swiper-pagination-bullet:last-child.swiper-pagination-bullet-active i{
		animation:last 6s;
		}
	@keyframes first{
	  0% {transform:scaleX(0.5);left:0px;}/*091*/
	  100% {transform:scaleX(1);left:2px;} /*0915*/
	}
	@keyframes last{
	  0% {transform:scaleX(0.7);left:-10px;}/*1090*/
	  20% {transform:scaleX(0.3);left:2px;} /*090*/
	  100% {transform:scaleX(0.3);left:0px;} /*090*/
	}
	@keyframes middle{
	  0% {transform:scaleX(0.7);left:-10px;}/*1091*/
	  20% {transform:scaleX(0.45);left:2px;}/*092*/
	  100% {transform:scaleX(1);left:2px;} /*0913*/
	}
</style>
