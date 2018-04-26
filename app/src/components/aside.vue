<template>
  <el-aside width="199px">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo side-navigation"
      active-text-color="#409EFF"
      @open="handleOpen"
      @close="handleClose"
      >
      <el-submenu v-for="(item,  index) in list" v-bind:key="index" :index=index>
        <template slot="title">
          <i :class="item.img"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <router-link tag="div" class="tab-item" :to="`/main/${index}/${index2}`" v-for="(d, index2) in item.detail" v-bind:key="index2">
          <!-- <router-link tag="div" class="tab-item" :to="`/main/${index}-${index2}`" v-for="(d, index2) in item.detail" v-bind:key="index2"> -->
           <el-menu-item :index="`${index}-${index2}`" @click="addTabFa(index, index2)">{{d.title}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script type="text/ecmascript-6">
import Bus from "./bus.js"
import MyDesktop from "../components/content/myDesktop"
import UserAmdin from '../components/content/userAmdin'
export default {
  data() {
    return {
      allComponents: [],
      componentName: "",
      message: "",
      activeTitle: "",
      list: [
        {
          title: "用户管理",
          
          img: "icon iconfont icon-houtaiyonghuguanli",
          detail: [
            { title: "用户管理",
              component: MyDesktop,
            },
            { title: "战狼行动图片上传",
              component: UserAmdin,
            },
            { title: "图片管理",
              component: MyDesktop,
            }
          ]
        },
        {
          title: "图片管理",
          component: MyDesktop,
          img: "icon iconfont icon-icon-test",
          detail: [
            { title: "应用商店图片上传" },
            { title: "数据报表" },
            { title: "在线用户列表" },
            { title: "系统推送" }
          ]
        },
        {
          title: "运维报表管理",
          component: MyDesktop,
          img: "icon iconfont icon-yunyingguanli",
          detail: [{ title: "客户经理统计报表" }]
        }
      ]
    }
  },
  components: {
    // MyDesktop
  },
  computed: {},
  methods: {
    addTabFa(index, index2) {
      // this.$refs.child.addTab(data)
      this.activeTitle = this.list[index].detail[index2]
      // Bus.$emit('on', '1')
      Bus.$emit("on", this.activeTitle);
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
};
</script>

<style>
.el-aside {
  background-color: rgba(238, 238, 238, 0.98);
  overflow: hidden;
}
/* .side-navigation::-webkit-scrollbar {
    display: none;
} */
.side-aside {
  width: -webkit-calc(100% + 17px);
  width: -moz-calc(100% + 17px);
  width: calc(100% + 17px);
  overflow-y: auto;
}
.side-navigation,
.el-menu-item-group {
  background: #eee;
}
.el-submenu {
  border-bottom: 1px solid #e5e5e5;
}
.el-submenu__title:hover {
  background-color: #eee;
  color: #409eff;
}
.el-menu-item,
.el-submenu__title {
  height: 35px！impotant;
  line-height: 35px！important;
  position: relative;
  -webkit-box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
}
.el-menu-item:hover {
  background-color: #fff;
}
.el-menu-item:focus,
.el-menu-item:hover {
  outline: 0;
  background-color: #fff;
  color: #409eff;
}
</style>
