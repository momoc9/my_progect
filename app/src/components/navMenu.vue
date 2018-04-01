                                      
 <template>
  <el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#409EFF" router>
        <el-menu-item index="/mySend" class="menu_item">我的派单</el-menu-item>
        <el-menu-item index="/mySupport" class="menu_item">我的支持</el-menu-item>
        <el-menu-item index="myReview" class="menu_item">我的审核</el-menu-item>
      </el-menu>
    <div class="line"></div>
  </el-row>
</template>
<style>
  .el-menu--horizontal>.menu_item{
    height: 1rem;
    line-height: 1rem;
  }
</style>
<script>
export default {
  // computed: {
  //   activeIndex () {
  //     return this.$router.path
  //      console.log( this.$router.path,'3')
  //   }
  // }, 
   data () {
    return {
      activeIndex:"/mySend" ,
    }
   },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    
    }
  }
}
</script>
