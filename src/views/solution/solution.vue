<template>
<div>
  <div class="h-b">
      <img src="../../assets/bg/h-b1.jpg" alt="">
  </div>

  <div class="solution2"  id="PainsOfTrade">
     <PainsOfTrade  ></PainsOfTrade>
  </div>

  <div class="solution">
    <ProjectConstructionIdeas id="ProjectConstructionIdeas"  style="padding-top: 50px;"></ProjectConstructionIdeas>
  </div>
  <!-- <router-view></router-view> -->
  <div class="solution">
    <Comparisonschemes  id="Comparisonschemes"  style="padding-top: 100px;"></Comparisonschemes>
  </div>

  <div class="solution">
     <EquipmentDisplay  id="EquipmentDisplay"  style="padding-top: 100px;"></EquipmentDisplay>
  </div>

  <div class="solution">
    <EquipmentDisplay2  id="EquipmentDisplay2" ></EquipmentDisplay2>
  </div>



  <Bottom></Bottom>
</div>
</template>

<script>
  import PainsOfTrade from './components/PainsOfTrade.vue'
  import ProjectConstructionIdeas from './components/ProjectConstructionIdeas.vue'
  import Comparisonschemes from './components/Comparisonschemes.vue'
  import EquipmentDisplay from './components/EquipmentDisplay.vue'
  import EquipmentDisplay2 from './components/EquipmentDisplay2.vue'
  import Bottom from '../../components/Bottom.vue'

  import $ from 'jquery'
  import {goAnchor,GetQueryString} from '../../assets/js/common.js';


  export default {

      components:{
        PainsOfTrade,
        ProjectConstructionIdeas,
        Comparisonschemes,
        EquipmentDisplay,
         EquipmentDisplay2,
         Bottom
      },

       mounted:function (){
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
  .solution{
    padding-bottom: 65px;
    height: 655px;
    overflow: hidden;
  }

    .solution2{
      padding-top: 50px;
      margin-top: 100px;
      height: 655px;
      overflow: hidden;
    }

  .h-b img {
    width: 1519px;
     height: 388px;
  }
  .h-b{
    margin-bottom: 70px;
    width: 100%;
    height: 388px;
    overflow: hidden;
  }

</style>
