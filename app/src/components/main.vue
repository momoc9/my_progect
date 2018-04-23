<template>
  <el-main>
    <!-- <div style="margin-bottom: 20px;">
        <el-button
          size="small"
        >
        {{message}}
        </el-button>
    </div> -->
    <Tabs ref="child"></Tabs>
  </el-main>
</template>

<script type="text/ecmascript-6">
import Tabs from './tabs/tabs'
import Bus from './bus.js'
export default {
  data () {
    return {
      parentMsg: 'hello child',
      message: ''
    }
  },
  components: {
    Tabs
  },
  methods: {
    // addTabFa (data) {
    //   // this.$refs.child.addTab(data)
    //   Bus.$emit('msg', '我要传给兄弟组件们，你收到没有')
    // }
  },
  mounted () {
    Bus.$on('on', (msg) => {
      this.message = msg
      this.$refs.child.addTab(msg)
    })
  }
}
</script>
<style>
</style>
