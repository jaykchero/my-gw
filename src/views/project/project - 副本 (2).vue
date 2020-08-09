<template>
  <div>
    <button @click="toPinglun">点击跳转到评论区</button>
    <div class="footer" @click="returnTop">99</div>
    <div ref="pinglun" style="margin-top: 1000px;">评论</div>

    <div id="header" style="margin-top: 1000px;">header</div>
  </div>
</template>

<script>


  export default {
  methods:{
      toPinglun(){
        this.$refs["pinglun"].scrollIntoView(true);
      },

      returnTop:function(){
            document.querySelector("#header").scrollIntoView(true);
          }


  }

  }
</script>

<style scoped="scoped">
.Excellent_swi {
    width: 100%;
    height: 100%;
}

.swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}
/* //图片水平垂直居中 */
.swiper-slide {
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

.swiper-pagination-bullet {
    width: 25px;
    height: 5px;
    display: inline-block;
    border-radius: 0;
    opacity: 0.5;
    background: #FFFFFF;
}

.swiper-pagination-bullet-active {
    background: #C6A771;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
    background-image: url();
}
/* //让图片响应屏幕 */
.banner {
    width: 100%;
    height: 100%;
}

</style>
