<template>
  <div class="container">
    <div class="fade-in full-width" />
    <div class="fade-in full-width" />
    <div class="fade-in half-width " />
    <div class="fade-in half-width " />
  </div>
</template>

<script>
export default {
  data () {
    return {
      fadeInElements: [],
    }
  },
  mounted () {
    // 先获取全部需要过渡效果的元素
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
   // console.log(this.fadeInElements.length)
    // 监听鼠标滚动事件
    document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 循环判断是否要触发过渡
    handleScroll (evt) {
      for (var i = 0; i < this.fadeInElements.length; i++) {
         console.log("i="+i)
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
  body {
    padding: 0;
    bottom: 0;
  }
  .container {
    display: table;
    width: 80%;
    min-width: 450px;
    margin: 0 auto;
  }

  .fade-in {
    background-color: #2ecc71;
    height: 500px;
    margin-bottom: 50px;
    opacity: 0;
    transition: 0.3s all ease-out;
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
