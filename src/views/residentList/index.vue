<template>
    <div>
      <div class="navBar">
          <van-nav-bar
              title="居民信息列表"
              left-text="返回"
              left-arrow
              @click-left="onClickLeft"
          />
      </div>

      <!-- 搜索 -->
      <van-search v-model="value" placeholder="请输入姓名或者身份证号码" />
      <!-- /搜索 -->
      <!-- 展示列表 -->
      <div class="list">
          <div class="list_text">
            <span>姓名</span>
            <span>年龄</span>
            <span>录入时间</span>
            <span>签约状态</span>
          </div>
          <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- <van-cell v-for="item in list" :key="item" :title="123" /> -->
          <div class="listMsg">
            <span>万小燕
              <img :src="icon[3]" alt="" width="14px">
            </span>
            <span>50</span>
            <span>2020-06-13</span>
            <span>12
              <img :src="icon[0]" alt="" width="20px">
            </span>
          </div>
          <div class="listMsg">
            <span>万小燕
              <img :src="icon[2]" alt="" width="14px">
            </span>
            <span>50</span>
            <span>2020-06-13</span>
            <span>12
              <img :src="icon[1]" alt="" width="12px">
            </span>
          </div>
          <div class="listMsg">
            <span>
              万小燕
              <img :src="icon[2]" alt="" width="14px">
            </span>
            <span>50</span>
            <span>2020-06-13</span>
            <span>12
              <img :src="icon[1]" alt="" width="12px">
            </span>
            <!-- <div>
              <van-button type="info">编辑</van-button>
              <van-button type="info">签约</van-button>
              <van-button type="info">服务</van-button>
              <van-button type="info">家庭</van-button>
              <van-button type="info">体检</van-button>
            </div> -->
          </div>
        </van-list>
      </div>

      <!-- /展示列表 -->
    </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      value: '',
      icon: [
        require('../../assets/list/contract.svg'),
        require('../../assets/list/nocontract.svg'),
        require('../../assets/list/gender_man.svg'),
        require('../../assets/list/gender_women.svg')
      ],
      isShow: false
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
    .van-nav-bar{
        background: -webkit-linear-gradient(left,#709AEE,#3CAFE2) no-repeat;
    }
    /deep/.van-nav-bar__text{
        color: #fff
    }
    /deep/.van-nav-bar .van-icon{
        color: #fff
    }
    /deep/.van-nav-bar__title{
        color: #fff
    }
    .list{
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      .list_text{
        padding: 0 5%;
       span{
          display: inline-block;
          width: 25%;
          font-size:14px;
          color: #848484
       }
       span:nth-child(3),span:nth-child(4){
         text-align: center
       }
      }
      .listMsg{
        padding: 0 5%;
       span{
          display: inline-block;
          width: 25%;
          height: 52px;
          line-height: 52px;
          font-size:14px;
          color: #585858
          // background-color: red
       }
        span:nth-child(3),span:nth-child(4){
         text-align: center
       }
       img{
         position: relative;
         left: 7px;
         top: 2px;
       }
      }
    }
</style>
