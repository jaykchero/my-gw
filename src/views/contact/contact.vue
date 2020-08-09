<template>
 <div>
    <div id="test" class="test">蚂蚁打死了大象</div>
       <button @click="show()">显示</button>
       <button @click="hide()">隐藏</button>

     <div id="test1" class="test1">蚂蚁打死了大象</div>

 </div>
</template>

<script>
   import {TweenMax, Power2, TimelineLite,TweenLite} from "gsap";
      export default {


          mounted() {



            TweenLite.to('#test1', 3, {
                opacity: 1,
                onComplete () {
                }
            })
          },

          methods: {
              // 显示
              show () {
                  TweenLite.to('#test', 1.5, {
                      opacity: 1,
                      onComplete () {
                      }
                  })
              },
              // 隐藏
              hide () {
                  TweenLite.to('#test', 1.6, {
                      opacity: 0,
                      onComplete () {
                      }
                  })
              }
          }
      }
</script>
<style scoped="scoped">
  .test{
      height: 200px; width: 200px; background: red; color: white;
  }

  .test1{
      height: 200px; width: 200px; background: red; color: white;
       opacity: 0;
  }
</style>
