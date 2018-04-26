<template id="app">
  <el-container direction="vertical">
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <!-- <Main></Main> -->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/header.vue'
import Aside from './components/aside.vue'
import Main from './components/main.vue'
export default {
  components: { Header, Aside, Main }
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
