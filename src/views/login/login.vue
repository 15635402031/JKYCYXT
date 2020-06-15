<template>
    <div>
        <div class="any">
          <van-image width="121" height="59" :src="titleImg" />
        </div>
        <div class="content">
          <div>
              <van-button type="primary" class="btn">
              <img :src="idImg" alt="">扫描身份证</van-button>
          </div>
          <div class="pwd">
            <img :src="keyImg" alt="">
            <span>自动输入账号</span>
          </div>
          <div>
            <van-form @submit="onSubmit">
              <van-field
                v-model="user.username"
                name="姓名"
                placeholder="姓名"
              />
              <van-field
                v-model="user.idNumber"
                name="身份证"
                placeholder="身份证"
              />
              <van-field
                v-model="user.towns"
                name="服务镇"
                placeholder="服务镇"
                class="com"
              />
              <van-field
                v-model="user.vilages"
                name="村"
                placeholder="村"
                class="coms"
              />
              </van-form>
              <div class="btnLogin">
                <van-button type="info">确认登录</van-button>
              </div>
          </div>
        </div>

    </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  data () {
    return {
      titleImg: require('../../assets/login/icon_b@2x.png'),
      idImg: require('../../assets/login/id.svg'),
      keyImg: require('../../assets/login/password.svg'),
      user: {
        username: '',
        idNumber: '',
        towns: '',
        vilages: ''
      }
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
    onSubmit (val) {
      console.log(val)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .any{
    height: 147px;
    width: 100%;
    background: -webkit-linear-gradient(left,#709AEE,#3CAFE2) no-repeat;
    overflow: hidden;
    .van-image{
      display: block;
      margin: 0 auto;
      margin-top: 35px
    }
  }
  .content{
    height: 549px;
    width: 375px;
    border-radius: 17px;
    background-color: #fff;
    position: absolute;
    top: 118px;
    .btn{
      display: block;
      width: 235px;
      height: 43px;
      line-height: 43px;
      margin: 0 auto;
      margin-top: 39px;
      background-color: rgba(26, 206, 197, 0.19);
      color: rgba(26, 206, 197, 1);
      border-radius: 6px;
      img{
        width: 22px;
        height: 16px;
        margin-right: 10px;
        position: relative;
        top: 3px
      }
      }
    }
    .pwd{
        margin: 0 auto;
        width: 99px;
        height: 29px;
        background-color: #515863;
        margin-top: 25px;
        span{
          font-size: 11px;
          color: #FFFFFF;
          line-height: 29px;
          position: relative;
          bottom: 2px;
          left: 5px
        }
        img{
          width: 7px;
          height: 13px;
          margin-left: 10px
        }
  }
  .van-form{
    margin-top: 7px;
    overflow: hidden;
    .van-cell{
      background-color: #F9F9F9;
      color: #707070;
      margin-top: 21px;
      width: 325px;
      margin: 20px auto
    }
    .com{
      background-color: #F9F9F9;
      color: #707070;
      width: 153px;
      height: 42px;
      float: left;
      margin-left: 25px;
      margin-top: 0;
    }
    .coms{
       background-color: #F9F9F9;
      color: #707070;
      width: 153px;
      height: 42px;
      float: right;
      margin-right: 25px;
       margin-top: 0;
    }
  }
  .btnLogin{
    margin: 0 auto;
    overflow: hidden;
    width: 274px;
    height: 42px;
    border-radius: 6px;
    margin-top: 55px;
    .van-button--normal{
      width: 274px;

      font-size: 13px;
      color: #fff
    }
  }
</style>
