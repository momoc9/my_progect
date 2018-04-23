<template id="app">
  <el-container direction="vertical">
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <router-view></router-view>
      <!-- <Main></Main> -->
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/header.vue'
import Aside from './components/aside.vue'
import Main from './components/main.vue'
import Hehe from './components/hehe.vue'
export default {
  components: { Header, Aside, Main, Hehe }
  // data () {
  //   return {
  //     list: []
  //   }
  // },
  // created () {
  //   this.getData()
  // },
  // methods: {
  //   getData () {
  //     this.$api.get('topics', null, r => {
  //       this.list = r.data
  //       console.log(r)
  //       // console.log(r.data)
  //     })
  //   }
  // }
}
</script>

<style>
  #app, .is-vertical{
    height: 100%;
  }
</style>
