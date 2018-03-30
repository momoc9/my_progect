<template>
  <div id="app">
    <router-view></router-view>
    <!-- router-view标签是将路由过来的组件渲染在什么地方 -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/style"
</style>
