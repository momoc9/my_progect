<template>
  <div id="app">
     <el-container direction="vertical">
       <Header></Header>
       <NavMenu></NavMenu>
     </el-container>
    <router-view></router-view>
    <!-- router-view标签是将路由过来的组件渲染在什么地方 -->
  </div>
</template>

<script>
import Header from './components/header.vue'
import Main from './components/main.vue'
import NavMenu from './components/navMenu.vue'
export default {
  components: { Header, Main, NavMenu },
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/style"
</style>
