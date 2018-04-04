<template>
  <el-main class="el-padding">
    <ul calss="reviewList" v-for="(item,index) in res" :key="item.id">
      <li class="listDetail" v-for="(list, index) in items" :key="list.id">
        <span class="reviewTitle" v-if="res">{{list.title}}</span>
        <span class="revuewText" v-if="index !== 4">{{list.hehe}}</span>
        <span class="revuewText radius" v-if="index == 4"><i>{{list.hehe}}</i></span>
      </li>
      <!-- <li class="listDetail">
        <span class="reviewTitle"></span>
        <span class="revuewText">{{res.appDate}}</span>
      </li>
      <li class="listDetail">
        <span class="reviewTitle"></span>
        <span class="revuewText">{{res.oppName}}</span>
      </li> -->
      <!-- 应该遍历 -->
      <!-- <li class="listDetail">
        <span class="reviewTitle">支撑人（支撑单位）</span>
        <span class="revuewText"><i>{{res.applicant}}</i></span>
      </li>
      <li class="listDetail">
        <span class="reviewTitle">支撑单状态</span>
        <span class="revuewText radius"><i>{{res.resApplyState}}</i></span>
      </li>
      <li class="listDetail">
        <span class="reviewTitle">资源申请编码</span>
        <span class="revuewText">QT-17-077</span>
      </li>
      <li class="listDetail">
        <span class="reviewTitle">支撑开始时间</span>
        <span class="revuewText">2018-01-27 12:01:58</span>
      </li>
      <li class="listDetail">
        <span class="reviewTitle">支撑项目名称</span>
        <span class="revuewText">运维集团（测试）商机</span>
      </li>
      <li class="listDetail">
        <span class="reviewTitle">支撑人（支撑单位）</span>
        <span class="revuewText"><i>董志伟</i></span>
      </li>
       <li class="listDetail">
        <span class="reviewTitle">支撑单状态</span>
        <span class="revuewText radius"><i>支撑结束</i></span>
      </li> -->
    </ul>
  </el-main>
</template>

<script type="text/ecmascript-6">
var axios = require("axios");
export default {
  data() {
    return {
      items: [
        {
          title: "资源申请编码",
          hehe: ""
        },
        {
          title: "支撑开始时间",
          hehe: ""
        },
        { title: "支撑项目名称" },
        { title: "支撑人（支撑单位）" },
        { title: "支撑单状态" }
      ],
      res: []
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    // var datas = {
    // 			"ContractRoot": {
    // 				"SvcCont": {
    // 					"ReqInfo": {
    // 						"LoginName": "157885",
    // 						"SystemId":"1212"
    // 					}
    // 				},
    // 				"TcpCont": {
    // 					"TimeStamp": "20171013143737",
    // 					"TransactionID": " ",
    // 					"BusCode": "OPP100270"
    // 				}
    // 			}
    // 		}
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:8080/ContractRoot")
        .then(response => {
          // console.log(this.items)
          console.log(response);
          this.res = response.data.svcCont.respInfo.resApplyList.slice(0,3);
          // 遍历返回的数据
          for (let index = 0; index < this.res.length; index++) {
             this.forData (index)
          }
         
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 根据item判断展示的value
    forData (i) {
       for (let index = 0; index < this.items.length; index++) {
             //console.log(i)
            switch (index) {
              case 0:
                this.items[index].hehe = this.res[i].oppId;
                 console.log(this.items[index].hehe,'hehe')
                break;
              case 1:
                this.items[index].hehe = this.res[i].appDate;
                break;
              case 2:
                this.items[index].hehe = this.res[i].oppName;
                break;
              case 3:
                this.items[index].hehe = this.res[i].applicant;
                break;
              case 4:
                this.items[index].hehe = this.res[i].resApplyState;
                break;
              default:
                console.log('不该出现')
                break;
            }
          }
    }
  },
  components: {}
};
</script>

<style>

</style>
