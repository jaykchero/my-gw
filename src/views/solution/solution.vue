<template>
<div>
  <PainsOfTrade  id="PainsOfTrade" class="solution"></PainsOfTrade>
  <!-- <router-view></router-view> -->
  <ProjectConstructionIdeas id="ProjectConstructionIdeas" class="solution" style="padding-top: 50px;"></ProjectConstructionIdeas>
  <Comparisonschemes  id="Comparisonschemes" class="solution" style="padding-top: 100px;"></Comparisonschemes>
  <EquipmentDisplay  id="EquipmentDisplay" class="solution" style="padding-top: 100px;"></EquipmentDisplay>
  <EquipmentDisplay2  id="EquipmentDisplay2" class="solution"></EquipmentDisplay2>
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
    height: 655px;
    overflow: hidden;
  }
</style>
