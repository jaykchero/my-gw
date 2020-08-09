/* eslint-disable */
<template>

<div class="top">

   <div class="logo">
    <!-- <img src="../assets/logo1.jpg" alt=""> -->
    <span>logo位置</span>
   </div>

   <div class="header">
     <ul>
     	<li :class="{on:current == 'a'}">
         <router-link to="/home">首页</router-link>
       </li>
       <li :class="{on:current == 'a'}">
         <router-link to="/project">项目案例</router-link>
       </li>
      <li :class="{on:current == 'a'}">
        <router-link to="/join">加入我们</router-link>
      </li>
      <li :class="{on:current == 'a'}">
        <router-link to="/contact">联系我们</router-link>
      </li>
     </ul>
   </div>


</div>

</template>

<script>
  export default{
    props:["current"],



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

  .top ul li{
    margin-left: 60px;
    width: 80px;
    padding: 10px 0;
    text-align: center;
  }
 .top ul li:first-child{
    margin-left: 0px;
   
  }



  .active{
   font-size: 20px;
  /* border-bottom: 0.03125rem solid brown; */
   /* margin-top: 30px; */

     color: #444;

  }
  a{

    display: block;
    color: #4e4e4e;
    text-decoration: none;
  /*  margin-left: 60px; */
    width: 80px;
    padding: 10px 0;
    text-align: center;
  }

  top ul .on{
      border-bottom: 0.03125rem solid brown;
  }

</style>
