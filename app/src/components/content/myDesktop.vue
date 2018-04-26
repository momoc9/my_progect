<template>
   <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column class="title-name"
      prop="date"
      label="销售助手信息统计"
      >
      <el-table-column
      prop="date"
      label="统计"
      >
      </el-table-column>
      <el-table-column
      prop="all"
      label="总使用次数"
      >
      </el-table-column>
      <el-table-column
      prop="ios"
      label="IOS使用次数">
      </el-table-column>
      <el-table-column
      prop="android"
      label="安卓使用次数">
      </el-table-column>
      <el-table-column
      prop="download"
      label="下载成功次数">
      </el-table-column>
      <el-table-column
      prop="fail"
      label="下载失败次数">
      </el-table-column>
      <el-table-column
      prop="uninstall"
      label="卸载次数">
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'myDesktop',
  data () {
    return {
      tableData: [
        {
          date: '总数',
          all: '0',
          ios: '0',
          android: '0',
          download: '0',
          fail: '0',
          uninstall: '0'
        },
        {
          date: '今日',
          all: '0',
          ios: '0',
          android: '0',
          download: '0',
          fail: '0',
          uninstall: '0'
        },
        {
          date: '本周',
          all: '0',
          ios: '0',
          android: '0',
          download: '0',
          fail: '0',
          uninstall: '0'
        },
        {
          date: '本月',
          all: '0',
          ios: '0',
          android: '0',
          download: '0',
          fail: '0',
          uninstall: '0'
        }
      ]
    }
  },
  components: {}
}
</script>

<style>
  .el-table th,.el-table td{
    text-align: center;
  }
  .el-table__row td:nth-child(1){
    background: #f5f7fa;
  }
</style>
