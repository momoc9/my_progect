<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text = "dat.title"></h2>
    <p v-if="dat.author">评论者：{{dat.author.loginname}}评论于：{{$utils.goodTime(dat.create_at)}}</p>
    <hr>
    <article v-html = "dat.content"></article>
    <h3>网友回复： </h3>
    <ul>
      <li v-for="i in dat.replies" :key="i.replies">
        <P>评论者：{{i.author.loginname}}</P>
        <article v-html="i.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
export default {
  components: { myHeader, myFooter },
  data () {
    return {
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
        this.dat = r.data
      })
    }
  }
}
</script>
