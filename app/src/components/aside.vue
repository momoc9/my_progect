<template>
  <el-aside width="199px">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo side-navigation"
      @open="handleOpen"
      @close="handleClose"
      >
      <el-submenu v-for="(item,  index) in list" v-bind:key="index" index="index+1">
        <template slot="title">
          <i class="icon iconfont icon-houtaiyonghuguanli"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <router-link tag="div" class="tab-item" to="/main/1" v-for="(d, key, index2) in item.detail" v-bind:key="index2">
           <el-menu-item index=(index+1)-(index2+1) @click="addTabFa">{{d.title}}</el-menu-item>
          </router-link>
           <!-- <router-link tag="div" class="tab-item" to="/main/2">
          <el-menu-item index="1-2" @click="addTabFa">数据报表</el-menu-item>
          </router-link>
          <router-link tag="div" class="tab-item" to="/main/3">
            <el-menu-item index="1-3" @click="addTabFa">在线用户列表</el-menu-item>
          </router-link>
          <router-link tag="div" class="tab-item" to="/main/4">
            <el-menu-item index="1-4" @click="addTabFa">系统推送</el-menu-item>
          </router-link> -->
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-submenu index="2">
        <template slot="title">
          <i class="icon iconfont icon-icon-test"></i>
          <span>图片管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">应用商店图片上传</el-menu-item>
          <el-menu-item index="2-2">战狼行动图片上传</el-menu-item>
          <el-menu-item index="2-3">图片管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="icon iconfont icon-yunyingguanli"></i>
          <span>运维报表管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">客户经理统计报表</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </el-aside>
</template>

<script type="text/ecmascript-6">
import Bus from './bus.js'
export default {
  data () {
    return {
      message: '',
      list: [
        {
          title: '用户管理',
          img: 'icon iconfont icon-houtaiyonghuguanli',
          detail: [
            { title: '用户管理' },
            { title: '战狼行动图片上传' },
            { title: '图片管理' }
          ]
        },
        {
          title: '图片管理',
          img: 'icon iconfont icon-icon-test',
          detail: [
            { title: '应用商店图片上传' },
            { title: '数据报表' },
            { title: '在线用户列表' },
            { title: '系统推送' }
          ]
        },
        {
          title: '运维报表管理',
          img: 'icon iconfont icon-yunyingguanli',
          detail: [{ title: '客户经理统计报表' }]
        }
      ]
    }
  },
  components: {},
  methods: {
    addTabFa () {
      // this.$refs.child.addTab(data)
      Bus.$emit('on', '1')
    }
  }
}
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
