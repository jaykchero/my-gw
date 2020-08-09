<template>

  <div class="about-all">
      <div id="about1" >
         <about1></about1>
      </div>
      <div id="culture">
         <culture></culture>
      </div>
      <div id="DevelopmentHistory" style="margin-top:150px;">
        <DevelopmentHistory></DevelopmentHistory>
      </div>

     <!-- <transition enter-active-class="fadeInDown animated">
        <router-view/>
      </transition> -->

</div>
</template>

<script>
  import about1 from './componets/aboutOurs.vue'
  import culture from './componets/Culture.vue'
  import DevelopmentHistory from './componets/DevelopmentHistory.vue'

    import $ from 'jquery'
   //import {goAnchor,GetQueryString} from '../../assets/js/common.js';

  export default{
    components:{
       about1,
       culture,
       DevelopmentHistory
    },


    mounted: function () {
         var hash = window.location.hash;
         var index = hash.lastIndexOf("#");
         if (index != -1) {
           var id = hash.substring(index + 1, hash.length + 1);
           var div = document.getElementById(id);
           if (div) {
             setTimeout(function () {
               console.log($(div).offset().top);
               //$('html,body').scrollTop($(div).offset().top - 43);
               $('html, body').animate({scrollTop: $(div).offset().top - 43}, 500)
             }, 500);
           }
         }
     },

       // methods:{
       //     goAnchor(selector) {
       //    		let anchor = this.$el.querySelector(selector)



       //        setTimeout(() => { //页面没有渲染完成时是无法滚动的，因此设置延迟

       //          //anchor.scrollIntoView(); //js的内置方法，可滚动视图位置至元素位置
       //         var curTop =document.documentElement.scrollTop

       //          $('html,body').animate({

       //              scrollTop:curTop

       //            },

       //            1000);

       //        }, 500);



       //          console.log("curTop=="+curTop)

       //    	},
       //  },


    }


</script>

<style scoped="scoped">
  .about-all{
    position: relative;
  }
</style>
