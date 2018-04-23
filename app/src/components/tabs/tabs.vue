<template>
  <div>
      <!-- <div style="margin-bottom: 20px;">
        <el-button
          size="small"
           @click="addTab(editableTabsValue2)"
        >
        add tab
        </el-button>
      </div> -->
      <em></em>
      <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item) in editableTabs2"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          {{item.content}}
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
// import Bus from './bus.js'
export default {
  data () {
    return {
      editableTabsValue2: '1',
      editableTabs2: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }
      ],
      tabIndex: 1
    }
  },
  props: ['message'],
  methods: {
    addTab (targetName) {
      console.log(this.editableTabs2)
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab (targetName) {
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
/* .el-tabs--card>.el-tabs__header .el-tabs__nav {
    background: url('./acrossTab-2.png')
}
.el-tabs--card>.el-tabs__header .el-tabs__nav::after{
     content:url('./acrossTab-2.png')
} */
</style>
