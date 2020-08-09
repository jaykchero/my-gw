/* eslint-disable */
<template>

<div class="top">

   <div class="logo">
    <!-- <img src="../assets/logo1.jpg" alt=""> -->
    <span>logo位置</span>
   </div>

   <div class="header">




 <a-menu v-model="current" mode="horizontal" router :default-active="$route.path">
      <a-sub-menu index="1">
        <span slot="title" class="submenu-title-wrapper"
          > <router-link to="/home">首页</router-link></span
        >
       <a-menu-item-group >

          <a-menu-item key="setting:1">
            关于我们
          </a-menu-item>
          
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>

          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>

      </a-sub-menu>


      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          > <router-link to="/project">项目案例</router-link></span
        >
        <a-menu-item-group >
           <a-menu-item key="setting:1">
             Option 1
           </a-menu-item>
           <a-menu-item key="setting:2">
             Option 2
           </a-menu-item>

           <a-menu-item key="setting:3">
             Option 3
           </a-menu-item>
           <a-menu-item key="setting:4">
             Option 4
           </a-menu-item>
         </a-menu-item-group>
      </a-sub-menu>


      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          > <router-link to="/join">加入我们</router-link></span>
        <a-menu-item-group >
           <a-menu-item key="setting:1">
             Option 1
           </a-menu-item>
           <a-menu-item key="setting:2">
             Option 2
           </a-menu-item>

           <a-menu-item key="setting:3">
             Option 3
           </a-menu-item>
           <a-menu-item key="setting:4">
             Option 4
           </a-menu-item>
         </a-menu-item-group>
      </a-sub-menu>


      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          > <router-link to="/contact">联系我们</router-link></span>
        <a-menu-item-group >
           <a-menu-item key="setting:1">
             Option 1
           </a-menu-item>
           <a-menu-item key="setting:2">
             Option 2
           </a-menu-item>

           <a-menu-item key="setting:3">
             Option 3
           </a-menu-item>
           <a-menu-item key="setting:4">
             Option 4
           </a-menu-item>
         </a-menu-item-group>
      </a-sub-menu>


    </a-menu>

   </div>


    <!--  <home></home> -->

</div>

</template>

<script>

  export default{
      data() {
          return {
            current: ['mail'],
          };
        },

    // beforeCreate () {
    //     document.querySelector('a').setAttribute('style', 'color:#333')
    // },
    // beforeDestroy () {
    //     document.querySelector('body').removeAttribute('style')
    // }
  }



</script>

<style>


  .top{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  }

  .logo{
    font-size: 30px;
    display: flex;
    float: right;

  }

  .top ul{
    display: flex;
    float: right;
  }


 .top ul li:first-child{
    margin-left: 0px;

  }

  a{
     color: #4e4e4e !important;
  }



  .active{
   font-size: 20px;
  /* border-bottom: 0.03125rem solid brown; */
   /* margin-top: 30px; */



  }




  .submenu-title-wrapper{
      color:  #4e4e4e;

  }

</style>
