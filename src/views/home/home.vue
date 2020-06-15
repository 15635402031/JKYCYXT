<template>
    <div class="all">
         <!-- 顶部 -->
         <div class="header">
           <div class="title_left">
              <van-image  height="21" :src="titleLeft" />
              <span>用户名</span>
           </div>
           <div class="title_right">
             <van-image  height="21" :src="titleRight" />
             <span>图片缓存</span>
           </div>
        </div>
        <!-- /顶部 -->

        <!-- banner -->
        <div class="banner">
          <van-grid>
            <van-grid-item :icon="information" text="居民信息列表" />
            <van-grid-item :icon="family" text="家庭基本信息" />
            <van-grid-item :icon="record" text="随访记录" />
            <van-grid-item :icon="instal" text="设置" />
          </van-grid>
        </div>
        <!-- /banner -->

        <!-- 表格 -->
        <div class="graph">
            <!-- 表格容器 -->
              <div id="main" style="width: 100%;height:229px;"></div>
            <!-- /表格容器 -->
        </div>
        <!-- /表格 -->

        <!-- 宫格展示 -->
        <div class="grid">
          <van-grid square>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[0]" />
              <div class="grid_text">
                  <span class="van-grid-item__text">儿童</span>
                  <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[1]" />
              <div class="grid_text">
                <span class="van-grid-item__text">孕产妇</span>
                <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[2]" />
              <div class="grid_text">
                <span class="van-grid-item__text">老人</span>
                <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[3]" />
              <div class="grid_text">
                <span class="van-grid-item__text">糖尿病</span>
                <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[4]" />
              <div class="grid_text">
                <span class="van-grid-item__text">高血压</span>
                <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[5]" />
              <div class="grid_text">
                <span class="van-grid-item__text">严重</span>
                <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[6]" />
              <div class="grid_text">
                <span class="van-grid-item__text">肺结核</span>
                <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <van-image  height="28" width="28" :src="icon[7]" />
              <div class="grid_text">
                <span class="van-grid-item__text">癫痫</span>
                <span class="van-grid-item__text">随访记录</span>
              </div>
            </van-grid-item>
            <van-grid-item  :icon="icon[8]" text="随访轨迹"/>
            <van-grid-item  :icon="icon[9]" text="健康教育"/>
            <van-grid-item  :icon="icon[10]" text="卫计监督"/>
            <van-grid-item  :icon="icon[11]" text="离线缓存"/>
          </van-grid>
        </div>
        <!-- /宫格展示 -->
        <residentList/>
    </div>
</template>

<script>
export default {
  name: '',
  props: {

  },
  data () {
    return {
      titleLeft: require('../../assets/home/user.svg'),
      titleRight: require('../../assets/home/cache.svg'),
      information: require('../../assets/home/information.svg'),
      family: require('../../assets/home/family.svg'),
      record: require('../../assets/home/record.svg'),
      instal: require('../../assets/home/instal.svg'),
      icon: [
        require('../../assets/home/child.svg'),
        require('../../assets/home/pregnantwoman.svg'),
        require('../../assets/home/oldman.svg'),
        require('../../assets/home/diabetes.svg'),
        require('../../assets/home/hypertension.svg'),
        require('../../assets/home/mentaldisorders.svg'),
        require('../../assets/home/tuberculosis.svg'),
        require('../../assets/home/epilepsy.svg'),
        require('../../assets/home/track.svg'),
        require('../../assets/home/education.svg'),
        require('../../assets/home/control.svg'),
        require('../../assets/home/download.svg')
      ]
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {
    this.myEcharts()
  },
  watch: {

  },
  methods: {
    myEcharts () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'))
      // 指定图表的配置项和数据
      var option = {
        color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: -30,
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['儿童', '孕妇', '产妇', '老年人', '残疾人', '贫困户', '低特', '低五保', '高血压', '糖尿病', '精神病'],
            axisTick: {
              alignWithLabel: true
            },
            /**
             *  解决文字竖直排布
             *  interval:表示间隔（如果设置为1，则就是间隔一个显示一个数据）
             *  ratate:表示旋转的角度
             *  formatter 回调函数有两个参数  参数1(value):代表病种 参数2(index):代表下标索引
             * */
            axisLabel: {
              interval: 0,
              formatter: function (value, index) {
                return value.split('').join('\n')
              },
              color: '#6E6E6E'
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            label: {
              show: true,
              fontSize: 11,
              color: '#6E6E6E'
            }
            // axisLabel:{interval:0,ratate:60}
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false

          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = [
                    '#FFBD4B', '#42BEFD', '#2AC0DF', '#40C9CE', '#7BC8A1',
                    '#8AC6EB', '#A9B1EE', '#E498F1', '#F98FEE', '#C19EFF',
                    '#E898A5'
                  ]
                  return colorList[params.dataIndex]
                },
                // label是否显示，显示位置和显示格式的设置了
                label: {
                  show: true,
                  position: 'top',
                  // formatter: '{c}'表示y轴数据 {b}表示x轴数据
                  formatter: '{c}人',
                  fontSize: 8,
                  color: '#6E6E6E',
                  fortFamily: 'PingFang SC'
                }
              }
            },
            // 设置柱的宽度
            barWidth: 16,
            data: [573, 133, 323, 823, 203, 243, 73, 213, 743, 693, 223]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表
      myChart.setOption(option)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.all{
  background-color: #ECF3FB;
}
  .header{
    height: 147px;
    width: 100%;
    background: -webkit-linear-gradient(left,#709AEE,#3CAFE2) no-repeat;
    overflow: hidden;
    .title_left{
      float: left;
      color: #fff;
      font-size: 16px;
      margin-top: 42px;
      margin-left: 12px;
      .van-image{
        position: relative;
        top: 3px
      }
    }
    .title_right{
      float: right;
       color: #fff;
       font-size: 16px;
       margin-top: 42px;
       margin-right: 12px;
       .van-image{
         position: relative;
         top: 3px
       }
    }
  }
  .banner{
    height: 96px;
    width: 351px;
    background-color: #fff;
    // margin: 0 auto;
    position: absolute;
    top: 103px;
    left: 12px;
    overflow: hidden;
    border-radius: 8px;
    /deep/.van-grid-item__content{
      padding: 16px 3px;
      span{
        margin-top: 13px;
        color: #8E8AF4;
        font-size: 13px
      }
    }
  }
  .graph{
    margin: 0 auto;
    margin-top: 74px;
    background-color: #fff;
    width: 351px;
    border-radius: 8px;
  }
  .grid{
    width: 351px;
    margin:0 auto;
    margin-top: 20px;
    padding-bottom: 11px;
    .van-grid{
      overflow: hidden;
      border-radius: 8px;
    }
    .grid_text{
      margin-top: 3px;
      span{
        display: block;
        text-align: center;
      }
    }
  }

</style>
