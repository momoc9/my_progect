<template>
  <div>
    <!-- 默认横向排列 -->
     <el-container direction="vertical">
       <Header></Header>
       <NavMenu></NavMenu>
       <Main></Main>
     </el-container>
    <!-- <NavMenu></NavMenu> -->
    <!-- <Header></Header> -->
    <!-- <div class="article_list">
      <ul>
        <li v-for = "i in list" :key="i.subCode">
          <time v-text = "$utils.goodTime(i.create_at)"></time>
          <router-link :to = " `/content/${i.id}`">
            {{i.title}}
          </router-link>
        </li>
      </ul>
    </div> -->
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Main from '../components/main.vue'
import NavMenu from '../components/navMenu.vue'
export default {
  components: { Header, Main, NavMenu },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        this.list = r.data
        console.log(r)
        // console.log(r.data)
      })
    }
  }
}
</script>

<style>
  .article_list{
    margin: auto
  }
</style>
