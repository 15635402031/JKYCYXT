<template>
    <div>
        <div class="navBar">
            <van-nav-bar
                title="数据统计"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
            />
        </div>

        <van-tabs type="card">
            <van-tab title="当日"></van-tab>
            <van-tab title="一周"></van-tab>
            <van-tab title="一月"></van-tab>
            <van-tab title="全部"></van-tab>
        </van-tabs>

        <!-- 展示数据 -->
        <div id="main" style="width: 100%;height:229px;"></div>
        <!-- /展示数据 -->

        <div>
            <div class="entey">
                <img :src="entry" alt="" width="21px">
                <span>录入数据</span>
                <div>0</div>
            </div>
            <div class="entey">
                <img :src="file" alt="" width="21px">
                <span>录入数据</span>
                <div>0</div>
            </div>
            <div class="entey">
                <img :src="contract" alt="" width="21px">
                <span>录入数据</span>
                <div>0</div>
            </div>
            <div class="entey">
                <img :src="familydata" alt="" width="21px">
                <span>录入数据</span>
                <div>0</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: '',
  props: {

  },
  data () {
    return {
      entry: require('../../assets/data/entry.svg'),
      file: require('../../assets/data/file.svg'),
      contract: require('../../assets/data/contract.svg'),
      familydata: require('../../assets/data/familydata.svg')
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
    onClickLeft () {
      Toast('返回')
    },

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
    .van-tabs{
        margin-top: 20px
    }
    .entey{
        // background-color: skyblue;
        overflow: hidden;
        height: 52px;
        line-height: 52px;
        border-bottom:1px solid #cccccc;
        img{
            float: left;
            margin: 15px 12px 16px 22px
        }
        span{
            float: left;
            font-size: 16px;
            color: #808080
        }
        div{
            float: right;
            font-size: 16px;
            color: #808080;
            margin-right: 18px
        }
    }
</style>
