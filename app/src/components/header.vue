<template>
    <el-header height = ".88rem">
      <el-col class="hehe" :span="2"><i class="el-icon-arrow-left"></i></el-col>
      <el-col class="hehe1" :span="20">集约支撑</el-col>
      <el-col class="hehe2" :span="2">
        <el-dropdown>
          <span class="el-dropdown-link" @click="toggle()">
           <i class="el-icon-plus"></i>
           <!-- <i class="el-icon-zoom-in"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>待审核</el-dropdown-item>
            <el-dropdown-item>审核已通过</el-dropdown-item>
            <el-dropdown-item>审核未通过</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-header>
</template>
<style>
.el-header {
  background: #409eff;
  line-height: 0.88rem;
  vertical-align: bottom;
}
.el-col {
  height: 0.88rem;
}
.hehe2 {
  /* background: yellow; */
  text-align: right;
}
.hehe,
.hehe1,
.hehe2 {
  height: 100%;
  color: #fff;
}
.el-dropdown-menu{
  background:rgba(0,0,0,.8);
}
.el-dropdown-menu__item{
  color: #fff;
}
</style>
<script>
export default {
  data () {
    return {
      isShow:false
    }
  },
  methods: {
    toggle: function(){
      this.isShow = ! this.isShow
      console.log(this.isShow)
    }
  }
}
</script>

