<template>
  <!-- 头部 -->
    <!-- < 文字 下拉列表图标 -->
  <!-- 导航栏 -->
  <!--  内容区-->
  <!-- <el-container> -->
    <el-header height = ".88rem">
      <el-col class="hehe" :span="2"><i class="el-icon-arrow-left"></i></el-col>
      <el-col class="hehe1" :span="20">集约支撑</el-col>
      <el-col class="hehe2" :span="2"><i class="el-icon-plus"></i></el-col>
    </el-header>
    <!-- <el-main>Main</el-main> -->
  <!-- </el-container> -->
</template>
<style>
  .el-header{
    background: #409EFF;
    line-height: .88rem;
    vertical-align: bottom;
  }
  .el-col{
     height: .88rem;
  }
  /* .hehe{
    background: black;
  } */
  /* .hehe1{
    background: pink;
  } */
  .hehe2{
    /* background: yellow; */
    text-align: right;
  }
  .hehe,.hehe1,.hehe2{
    height: 100%;
    color: #fff;
  }
</style>
