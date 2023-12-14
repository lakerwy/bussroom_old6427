<template>
  <div class="visit">
    <Card>
      <p slot="title" class="card-title">
        <!-- <Icon type="md-map" style="margin-right:5px"></Icon> -->
        <span style="font-size:18px; font-weight: bold;">每日来访量统计</span>

      </p>
      <div style="widht:100%; height:310px; padding:-20px;" ref="my_echarts">
      </div>
    </Card>
  </div>
</template>

<script>
  import echarts from "echarts";
  import {
    addDays,
    subDays,
    format
  } from "date-fns";
  var zh = require("../../../libs/zh.json");
  export default {
    name: "visitVolume",
    props: {
      pv: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        options: {
          grid: {
            top: '15%',
            left: '3%',
            right: '8%',
            bottom: '3%',
            containLabel: true
          },

          tooltip: {
            trigger: 'axis'
          },
          toolbox: {
            show: true,
            itemSize: 12,
            feature: {

              dataView: {
                readOnly: false
              },
              magicType: {
                type: ['bar']
              },
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: ['日来访量'],
            left: 0,
            top: 0

          },
          xAxis: {
            name: '日期',
            type: 'category',
            axisLabel: {
              interval: 0,
              margin: 20,
              fontSize: 10,
              rotate: -45,
              formatter: function (value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var date = new Date(value);
                var texts = [(date.getMonth() + 1), date.getDate()];
                // if (index === 0) {
                //   texts.unshift(date.getYear());
                // }
                return texts.join('/');
              },
              align: 'center'
            },
            axisTick: {
              alignWithLabel: true
            },
            data: []
          },
          yAxis: {
            // name: '当日来访量',
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [{
            name: '日来访量',
            type: 'line',
            data: [],
            color: "#39f",
            markLine: {
              data: [{
                name: '近30天最大值',
                type: 'max'
              }],
              label: {
                show: true,
                formatter: '{b}为' + '{c}',
                position: 'insideMiddleTop'
              }

            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(51,153,255, 1)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(51,153,255, 0.2)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }

          }]
        }
      };
    },
    methods: {
      init() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.$refs.my_echarts);
        // 获取横坐标数据
        let xData = [];
        let num = 30;
        let start = subDays(new Date(), num - 1);
        for (let i = 0; i < num; i++) {
          // let day = addDays(start, i).toLocaleString().split(" ")[0]
          let day = this.format(addDays(start, i), 'yyyy/MM/dd')
          xData.push(day);
        }
        this.options.xAxis.data = xData;
        // this.options.series[0].data = this.pv.slice(0,30);
        // 绘制图表
        setTimeout(() => {
          // this.pv = [0, 2, 12, 3, 2, 4, 5, 3, 1, 4, 2, 4, 5, 2, 3, 4, 2, 4, 2, 44, 2, 4, 24, 2, 42, 2]
          this.options.series[0].data = this.pv.slice(0, 30);
          myChart.setOption(this.options, 'dark')
          myChart.resize();
        }, 100);
        window.onresize = function () {
          myChart.resize();
          setTimeout(() => {
            myChart.resize();
          }, 200);
        }

      }
    },
    mounted() {
      this.init();
    }
  };
</script>