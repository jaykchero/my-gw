<template>
  <div class="adv" :class="{toleft:isToLeft}" >
    <div class="left">
      <h2 class="h2">{{title1}}</h2>
      <p class="p">{{info}}</p>
      <h3 class="h3">{{title2}}</h3>
      <ur class="ul">
      	<li class="li" v-for="(item,index) in list " :key="index">
            {{item}}
        </li>
      </ur>
    </div>

    <div class="right">
        <img :src="img" alt="">
    </div>

  </div>
</template>

<script>
  export default{
          props:["title1","info","title2","list","img","isToLeft"]


  }

</script>

<style>
  .toleft{
    flex-direction: row-reverse;

  }

  .adv{
    display: flex;
    width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

  }

  .left{
    width: 50%;
  }


  .h2{
    text-align: left;
    color:#242424;
    font-size: 30px;
    font-weight: bolder;
   }

  .p{
  color: #605656;
  margin-top: 20px;
  line-height: 24px;
  text-align: left;
  }

  .h3{
  text-align: left;
  display: block;
  color: #363636;
  font-size: 15px;
  font-weight: bolder;
  margin-top: 40px;
  margin-bottom:15px;
  }

.ul{
    width:330px ;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .li{
    display: block;
      width: 10rem;
      height: 36px;
      text-align: center;


  }

</style>
