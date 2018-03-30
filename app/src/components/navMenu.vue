<template>
  <!-- <el-main> -->
  <el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
        <router-link to="/jq">
          <el-menu-item index="1" class="menu_item">我的派单</el-menu-item>
        </router-link>
        <el-menu-item index="2" class="menu_item">我的支持</el-menu-item>
        <el-menu-item index="3" class="menu_item">我的审核</el-menu-item>
      </el-menu>
    <div class="line"></div>
  <!-- <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col> -->
  </el-row>
  <!-- </el-main> -->
</template>
<style>
.el-menu--horizontal>.menu_item{
     height: .8rem;
     line-height: .8rem;
  }
</style>
<script>
import Jq from '../page/jq.vue'
export default {
  components: {
    Jq
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
//   methods: {
//     handleSelect(key,keyPath) {
//       console.log(key,keyPath)
//     }
//   }
}
</script>
