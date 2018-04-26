<template>
  <el-main>
    <Tabs ref="child"></Tabs>
    <!-- <MyDesktop v-if="aa"></MyDesktop> -->
    <router-view></router-view>
  </el-main>
</template>

<script type="text/ecmascript-6">
import Tabs from './tabs/tabs'
import MyDesktop from './content/myDesktop'
import Bus from './bus.js'
export default {
  data () {
    return {
      parentMsg: 'hello child',
      message: '',
      aa: 'flase'
    }
  },
  components: {
    Tabs,
    MyDesktop
  },
  methods: {
    // addTabFa (data) {
    //   // this.$refs.child.addTab(data)
    //   Bus.$emit('msg', '我要传给兄弟组件们，你收到没有')
    // }
  },
  mounted () {
    //通过bus接收到aside传过来的title
    Bus.$on('on', (msg) => {
      this.message = msg
      console.log(msg)
      // 调用tabs的方法且将title名传给tabs
      this.$refs.child.addTab(1, msg)
    })
  }
}
</script>
<style>
</style>
