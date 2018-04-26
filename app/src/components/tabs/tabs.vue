<template>
  <div>
    <!-- <router-link tag="div" :to="{name: 'myDesktop',params: { userId: 1 }}" class="hehe"> -->
      <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item) in editableTabs2"
          :key="item.name"
          :label="item.title"
          :name="item.name"
          >
          <tab-component :index="index" :name="index"></tab-component>
          <!-- <MyDesktop v-if="hehe"></MyDesktop>
          <UserAmdin></UserAmdin> -->
        </el-tab-pane>
      </el-tabs>
    <!-- </router-link>
    <router-view></router-view> -->
  </div>
</template>

<script type="text/ecmascript-6">
import MyDesktop from '../content/myDesktop'
import UserAmdin from '../content/userAmdin'
// import Bus from './bus.js'
export default {
  data () {
    return {
      // myDesktop: MyDesktop,
      editableTabsValue2: '1',
      editableTabs2: [
        {
          title: '我的桌面',
          name: '1',
          // myDesktop: myDesktop
          content: MyDesktop
        }
      ],
      tabIndex: 1
    }
  },
  components: {
    MyDesktop,
    UserAmdin
  },
  props: ['message'],
  methods: {
    addTab (targetName, title) {
      console.log(MyDesktop)
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: title,
        name: newTabName,
        content: MyDesktop
      })
      let _this = this
      let tabComponent = Vue.component('tab-component', {
        render: function (h) {
          var comp = _this.Tabs[this.index].content
          return h(comp)
        },
        props: {
          index: {
            type: Number,
            required: true
          }
        }
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab (targetName, title) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>

<style>

</style>
