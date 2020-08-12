<template>

  <div class="about-all">

      <div class="h-b">
          <img src="../../assets/bg/h-b1.jpg" alt="">
      </div>

      <div id="about1" class="about" >
         <about1></about1>
      </div>
      <div id="culture" class="about" style="padding-top: 100px; margin-bottom: 55px;">
         <culture></culture>
      </div>
      <div id="DevelopmentHistory" class="about2" style="padding-top: 60px;">
        <DevelopmentHistory></DevelopmentHistory>
      </div>
      <div class="about1">
        <Bottom></Bottom>
      </div>

</div>
</template>

<script>
  import about1 from './componets/aboutOurs.vue'
  import culture from './componets/Culture.vue'
  import DevelopmentHistory from './componets/DevelopmentHistory.vue'
  import Bottom from '../../components/Bottom.vue'


    import $ from 'jquery'
   import {goAnchor,GetQueryString} from '../../assets/js/common.js';

  export default{
    components:{
       about1,
       culture,
       DevelopmentHistory,
       Bottom

    },

     mounted:function (){
        // var topAbout1 = $('about1')[0].offsetTop;
         //console.log('topAbout1'+topAbout1)
        let maodian=this.GetQueryString('maodian');//进入页面，如果带有锚点参数，则跳转至锚点地方，参数值就是id名
          console.log("000"+maodian)
        console.info("*****",maodian)

        if(maodian){

            this.goAnchor('#'+maodian);

        }


      },

       methods:{
          goAnchor,
          GetQueryString,
        },


    }


</script>
<style scoped="scoped">
  .h-b img {
    width: 1519px;
     height: 388px;
  }
  .h-b{
    margin-bottom: -50px;
    width: 100%;
    height: 388px;
    overflow: hidden;
  }

  .about-all{
    position: relative;
    text-align: center;
  }
  .about {

    margin: 0 auto;
    width: 1200px;
    height: 655px;
    overflow: hidden;
  }

</style>
