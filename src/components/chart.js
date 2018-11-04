import React from 'react'

if (typeof window !== 'undefined') {
  require('hammerjs')
}

import {
  Chart,
  ChartLegend,
  ChartArea,
  ChartSeries,
  ChartSeriesItem,
  ChartTooltip,
  ChartSeriesLabels,
} from '@progress/kendo-react-charts'

const labelContent = e => e.category

const renderTooltip = context => {
  const { category, series, value } = context.point || context
  return (
    <div>
      {category} : {value}
    </div>
  )
}

const Donut = ({ data }) => (
  <Chart>
    <ChartTooltip render={renderTooltip} />
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        data={data}
        categoryField="kind"
        field="value"
      >
        <ChartSeriesLabels
          color="#fff"
          background="none"
          content={labelContent}
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartArea background="none" />
    <ChartLegend visible={true} />
  </Chart>
)

export default Donut
