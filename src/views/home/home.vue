<template>
  <div id="home">

    <div class="home">
      <swiperIndex></swiperIndex>
    </div>

    <div class="home">
      <my-adv :title1="adv1.title1" :info="adv1.info" :title2="adv1.title2" :list="adv1.list" :img="adv1.img"></my-adv>
    </div>

    <div class="home">
          <my-adv
           is-to-left=true
          :title1=" adv2.title1" :info="adv2.info" :title2="adv2.title2"
      :list="adv2.list" :img="adv2.img">
      </my-adv>
    </div>
    <div class="home1">

       <pro></pro>
    </div>
      <div class="home2">
          <Bottom></Bottom>
      </div>


  </div>
</template>

<script>
  import sea1 from '../../assets/home/iphone.png'
  import tb from '../../assets/home/notebook.png'

  //组件导入
  import myAdv from './componets/adv.vue'
  import swiperIndex from './componets/swiperIndex.vue'
  import pro from './componets/projected.vue'
  import Bottom from '../../components/Bottom.vue'

  export default {
    //name: 'carrousel',
    components: {
      myAdv,
      swiperIndex,
      pro,
      Bottom

    },

    data() {
      return {
        adv1: {
          title1: '关注微信公众号小程序',
          info: '小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
          title2: '优势特点',
          img: sea1,
          list: ['1111', '22222', '33333', '4444444444', '55555555', '6666666666666']

        },

        adv2: {
          title1: '关注微信公众号小程序',
          info: '小程序，公众号无需安装卸载方便快捷，满足不同客户的不同需求。',
          title2: '优势特点',
          img: tb,
          list: ['1111', '22222', '33333', '4444444444', '55555555', '6666666666666']

        },

      }
    },


  }
</script>
<style scoped="scoped">
  .home {
    height: 655px;
    overflow: hidden;
  }
  .home1 {
    padding-top: 80px;
    height: 700px;
  }
  .home2 {

    height:350px;
  }
</style>
