<template>
  <div class="hello">
    <h3>学习vue语法</h3>
    <p>test</p>
    <p>{{message}}</p>
    <div>{{hrefhtml}}</div>
    <div v-html="hrefhtml"></div>
    <div :id="dynamicId"></div>
    <!--冒号后面都表示可以动态变化的内容，实际是v-bind-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: "测试",
  
      hrefhtml:"<a href='https://cn.vuejs.org/guide/introduction.html'>这里是链接的名字，不是实际链接的名字</a>",
      //在这里修改模版
      dynamicId:10001
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

