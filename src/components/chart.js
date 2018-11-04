import React from 'react'

import {
  Chart,
  ChartLegend,
  ChartArea,
  ChartSeries,
  ChartSeriesItem,
  ChartTooltip,
} from '@progress/kendo-react-charts'

if (typeof window !== 'undefined') {
  require('hammerjs')
}

const renderTooltip = context => {
  const { category, value } = context.point || context
  return (
    <div>
      {category} : {value}
    </div>
  )
}

const Donut = ({ data }) => (
  <Chart style={{ height: 300 }}>
    <ChartTooltip render={renderTooltip} />
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={data}
        categoryField="key"
        field="amount"
      />
    </ChartSeries>
    <ChartArea background="none" />
    <ChartLegend visible={true} />
  </Chart>
)

export default Donut
