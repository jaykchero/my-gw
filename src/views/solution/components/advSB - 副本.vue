<template>

<div class="container">
  <div class="fade-in full-width">

  <div class="adv" :class="{toleft:isToLeft}">
    <div class="left " >
      <h2 class="h2 left1">{{title1}}</h2>
      <h3 class="lh3">{{englist}}</h3>
      <p class="p left1">{{info}}</p>
      <h3 class="h3 left1">{{title2}}</h3>
      <p class="p left1">{{info2}}</p>
       <h3 class="h3 left1">{{title3}}</h3>
        <p class="p left1">{{info3}}</p>
        <h3 class="h3 left1">{{title4}}</h3>
        <p class="p left1">{{info4}}</p>
    </div>
    <div class="sbright " >
        <img :src="img" alt="">
    </div>

  </div>
  </div>
    </div>
</template>

<script>
  export default{


           props:["title1","englist","info","title2","info2","title3","info3","title4","info4","title5","info5","img","isToLeft"],
          data(){
            return {
              fadeInElements:[],
              left:[],
              right:[]

            }

          },
          mounted () {
              // 先获取全部需要过渡效果的元素
              this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
               this.left = Array.from(document.getElementsByClassName('left'))
                this.right = Array.from(document.getElementsByClassName('right'))
               //  console.log("hah"+this.left)
              // 监听鼠标滚动事件
              document.addEventListener('scroll', this.handleScroll)
               document.addEventListener('scroll', this.handleScroll2)
               document.addEventListener('scroll', this.handleScroll3)

            },
             methods: {
              handleScroll3 (evt) {
                for (var i = 0; i < this.right.length; i++) {
                  var elem = this.right[i]
                  //console.log(elem.className)
                  var cN=elem.className
                  if (this.isElemVisible(elem)) {
                    elem.className=cN+" "+"animated fadeInRight"
                     console.log(elem.className)
                    this.right.splice(i, 1) // 只让它运行一次
                  }
                }
              },


               handleScroll2 (evt) {
                 for (var i = 0; i < this.left.length; i++) {
                   var elem = this.left[i]
                   //console.log(elem.className)
                   var cN=elem.className
                   if (this.isElemVisible(elem)) {

                     elem.className=cN+" "+"animated fadeInLeft"
                      console.log(elem.className)
                     this.left.splice(i, 1) // 只让它运行一次
                   }
                 }
               },



                // 循环判断是否要触发过渡
                handleScroll (evt) {
                  for (var i = 0; i < this.fadeInElements.length; i++) {
                    var elem = this.fadeInElements[i]
                    if (this.isElemVisible(elem)) {
                      elem.style.opacity = '1'
                      elem.style.transform = 'scale(1)'
                      this.fadeInElements.splice(i, 1) // 只让它运行一次
                    }
                  }
                },
           // 判断元素距离窗口的位置
              isElemVisible (el) {
                var rect = el.getBoundingClientRect()
                var elemTop = rect.top + 200 // 200 = buffer
                var elemBottom = rect.bottom
                return elemTop < window.innerHeight && elemBottom >= 0
              }
            },
  }

</script>

<style scoped="scoped">




    .left{
      vertical-align: top;
      width: 50%;
    }


    .h2{
      text-align: left;
      color: #477e9a;
      font-size: 30px;
      font-weight: bolder;
     }

    .p{
      margin-top: 0px !important;
    color: #605656;
    line-height: 24px;
    text-align: left;
    }

    .h3{
    text-align: left;
    display: block;
    color: #F79646;
    letter-spacing: 0;
    font-size: 18px;
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
    .lh3{
          color: #555;
          text-align: left;
          font-size: 30px;
          line-height: 36px;
          margin: 5px 0 0;
          font-family: "itcavantgardepro-bk";
          position: relative;
    }


    img{
      width: 500px !important;
      height: 500px !important;

    }

    /* 动画css */
  .container {
      display: table;
      width: 80%;
      min-width: 450px;
      margin: 0 auto;
    }

    .fade-in {
      /* background-color: #F5F5F5; */
      height: 500px;
      margin-bottom: 50px;
      opacity: 0;
      transition: 0.5s all ease-out;
      transform: scale(0.8);
      box-sizing: border-box;
      padding: 20px;
      display: inline-block;
    }
    .full-width {
      width: 100%;
    }

    .half-width {
      width: 47.5%;
    }

    .half-width:nth-of-type(2n + 1) {
      margin-right: 2.5%;
    }

    .half-width:nth-of-type(2n) {
      margin-left: 2.5%;
    }



</style>
