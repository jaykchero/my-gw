
<template>

  <div>
    <div class="sp" style="width: 100%; height: 500px;">
      <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="slide">
      	<img src="../../assets/girl/img1.jpg" alt="">
      	</swiper-slide>
          <swiper-slide class="slide">
            <img src="../../assets/girl/img2.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="slide">
            <img src="../../assets/girl/img3.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="slide">
            <img src="../../assets/girl/img4.jpg" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

      <!-- <div class="list">
          <ul >
          	<li v-for="(item,index) in list" :key="index">
              <img :src="item.img" alt="">
              <h2>{{item.title}}</h2>
              <p>{{item.info}}</p>
            </li>
          </ul>
        </div> -->

        <div   style="margin-top: 250px; background-color: 	#F5F5F5;width: 100%; " >

          <my-adv class="adv"
          :title1="adv1.title1"
          :info="adv1.info"
          :title2="adv1.title2"
          :list="adv1.list"
          :img="adv1.img"
          ></my-adv>
        </div>


        <div style="margin-top: 100px; background-color: #FFFFFF;width: 100%; ">
          <my-adv
           is-to-left=true
          class="adv"
          :title1="adv2.title1"
          :info="adv2.info"
          :title2="adv2.title2"
          :list="adv2.list"
          :img="adv2.img"
          ></my-adv>
        </div>


    <div style="margin-top: 100px; background-color: 	#F5F5F5;width: 100%; padding: 50px;">
      <pro></pro>
    </div>

      <!-- <div style="margin-top: 100px; background-color: 	#FFFFFF;width: 100%; padding: 50px;">
        <pro2></pro2>
      </div> -->

       <div>
          <a-back-top />
          Scroll down to see the bottom-right
          <strong style="color: rgba(64, 64, 64, 0.6)"> gray </strong>
          button.
       </div>



  </div>


</template>

<script>

  //图片资源导入
  import img1 from '../../assets/home/advantage-icon-1.png'
  import img2 from '../../assets/home/advantage-icon-2.png'
  import img3 from '../../assets/home/advantage-icon-3.png'
  import img4 from '../../assets/home/advantage-icon-4.png'
  import img5 from '../../assets/home/advantage-icon-5.png'
  import img6 from '../../assets/home/advantage-icon-6.png'
  import sea1 from '../../assets/home/iphone.png'
  import  tb from '../../assets/home/notebook.png'

  //组件导入
  import myAdv from './componets/adv.vue'
  import pro from './componets/projected.vue'
  // import pro2 from './componets/projected2.vue'




 export default {

    name: 'carrousel',

      components:{
        myAdv,
        pro,
        //pro2
      },


    data() {
      return {
           adv1:{
            title1:'关注微信公众号小程序',
            info:'小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
            title2:'优势特点',
            img:sea1,
            list:['1111','22222','33333','4444444444','55555555','6666666666666']

          } ,

          adv2:{
            title1:'关注微信公众号小程序',
            info:'小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
            title2:'优势特点',
            img:tb,
            list:['1111','22222','33333','4444444444','55555555','6666666666666']

          } ,

          list:[

            { img:img1,
            title:'111',
            info:'222',
            },
            { img:img2,
            title:'111',
            info:'222',
            }
            ,
            { img:img3,
            title:'111',
            info:'222',
            }
            ,
            { img:img4,
            title:'111',
            info:'222',
            }
            ,
            { img:img5,
            title:'111',
            info:'222',
            }
            ,
            { img:img6,
            title:'111',
            info:'222',
            }


          ]
          ,
        swiperOptions: {

            effect: 'cube',
                  grabCursor: true,
                  cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  },

              speed: 1000,
        　　pagination: '.swiper-pagination',
           autoplay: {
              disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
              delay: 2000, // 自动切换的时间间隔（单位ms）
               },

        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },

  }

</script>
<style>

  .list{
    width: 1200px;
    margin: 0 auto;
    margin-top: -3rem;
    background-color: #fff;
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;



  }
 .list li{
      width: 200px;
      float: left;
      margin-top: 43px;
      margin-bottom: 43px;
      }

    .list li img{
        height: 47px;
      }

    .list li h2{
      font-size: 16px;
      font-weight:bolder ;
      margin-top: 20px;
      }

      .list li p{
        font-size: 14px;
        line-height: 26px;

      }

  .swiper-container {
        width: 1519px;
        height: 720px;

      }
  .swiper-slide {
      background-position: center;
      background-size: cover;
    }




</style>
