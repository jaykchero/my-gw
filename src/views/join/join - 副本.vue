<template>
  <div class="pc">
    <h1>{{ msg }}</h1>
    <div
      class="demo"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
      :style="active"
    >
      <p ref="acp">我是内容</p>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld,I am PC",
      active: "",
    };
  },
  methods: {
    // 移入
    mouseOver() {
      this.active = "background-color:black; width:300px; height:300px";
      // 操作dom 获取p标签改变其样式
      var acps = this.$refs.acp
      acps.style.color = "red"
    },
    // 移出
    mouseLeave() {
      this.active = "";
      this.$refs.acp.style=''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pc {
  .demo {
  width:100px;
  height:100px;
  background:blue;
  transition-property: width ,height;
  transition-duration: 1s;
  -moz-transition-property: width ,height; /* Firefox 4 */
  -moz-transition-duration: 1s; /* Firefox 4 */
  -webkit-transition-property: width ,height; /* Safari and Chrome */
  -webkit-transition-duration: 1s; /* Safari and Chrome */
  -o-transition-property: width ,height; /* Opera */
  -o-transition-duration: 1s; /* Opera */
    p {
      color: limegreen;
    }
  }
}
</style>
