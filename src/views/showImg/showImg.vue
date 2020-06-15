<template>
    <div>
        <van-image width="100" height="100" :src="icon" />
        <div class="showImg">
          <span>健康盐池 医讯通</span>
          <div>MEDICAL COMMUNICATION</div>
        </div>
        <div class="copyright">
          <span>盐池县卫生和计划生育局版权所有</span>
          <div>陕西三思信息技术有限公司技术支持</div>
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
      icon: require('../../assets/showImg/icon.svg'),
      count: ''
    }
  },
  computed: {

  },
  created () {
    this.clickJump()
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    clickJump () {
      const timejump = 30
      if (!this.timer) {
        this.count = timejump
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= timejump) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
            // 跳转的页面写在此处
            this.$router.push('/login')
          }
        }, 100)
      }
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .van-image{
    display: block;
    margin: 0 auto;
    margin-top: 142px;
  }
  .showImg{
    margin: 0 auto;
    width: 322px;
    text-align: center;
    span{
      font-size: 17px;

      color: #2698FF;
    }
    div{
      margin-top: 4px;
      font-size: 13px;
      color: #2698FF
    }
  }
  .copyright{
    width: 160px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    left: 104px;
    bottom: 21px;
    span{
      font-size: 10px;
      color: #646464
    }
    div{
      font-size: 10px;
      color: #646464;
    }
  }
</style>
