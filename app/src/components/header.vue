<template>
  <el-header height="45px">
    <el-menu class="el-menu-demo" mode="horizontal">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-menu-item index="2">消息中心</el-menu-item>
  <el-menu-item index="3">订单管理</el-menu-item>
  <el-submenu index="4">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title">ene</template>
    <el-menu-item index="5-1">选项1</el-menu-item>
    <el-menu-item index="5-2">选项2</el-menu-item>
  </el-submenu>
</el-menu>
  </el-header>
</template>
<style>
 .el-header,.el-menu-demo{
   height: 45px;
   line-height: 45px;
   background: #2d6dcc;
 }
.el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu .el-submenu__title {
    line-height: 45px;
    color: #fff;
    font-size: 14px;
    height: 45px;
}
/* .el-submenu__title i {
    color: #fff;
} */
</style>
