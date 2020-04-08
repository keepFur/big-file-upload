<template>
  <v-charts :options="options" autoresize />
</template>

<script>
import vCharts from 'vue-echarts'
import 'echarts/lib/chart/sankey'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

export default {
  name: 'EchartDemo',
  components: {
    'v-charts': vCharts
  },
  data() {
    return {
      options: {
        color: ['#0188FB', '#4DCB73', '#FBDE6D', '#F96868'],
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'sankey',
            data: [
              {
                name: '新增报备',
                value: 1,
                itemStyle: { normal: { color: '#0188FB' } }
              },
              {
                name: '试用',
                value: 0,
                itemStyle: { normal: { color: '#4DCB73' } }
              },
              {
                name: '成单',
                value: 0,
                itemStyle: { normal: { color: '#FBDE6D' } }
              },
              {
                name: '流失',
                value: 0,
                itemStyle: { normal: { color: '#C1C1C1' } }
              }
            ],
            links: [
              { source: '新增报备', target: '试用', value: 0, count: 0 },
              { source: '新增报备', target: '成单', value: 0, count: 0 },
              { source: '新增报备', target: '流失', value: 0, count: 0 },
              { source: '试用', target: '成单', value: 0, count: 0 },
              { source: '试用', target: '流失', value: 0, count: 0 }
            ],
            itemStyle: { borderWidth: 0 }
          }
        ]
      }
    }
  }
}
</script>
