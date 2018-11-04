import React from 'react'
import _ from 'lodash'

import Layout from '../components/layout'
import Donut from '../components/chart'
import '../styles/dashboard.css'

const Dashboard = ({ data }) => {
  let income = 2400
  let totalExpenses = data.reduce((a, b) => (a += b.amount), 0)
  let remaining = income - totalExpenses

  data = _.chain(data)
    .groupBy('type')
    .map((group, key) => ({ key, amount: _.sumBy(group, 'amount') }))
    .value()

  return (
    <Layout>
      <div className="page__title">
        <h1>Dashboard</h1>
        <p>Here is an overview of your expenses</p>
      </div>
      <div className="dashboard__overview">
        <Donut data={data} />
        <div className="dashboard__totals">
          <p className="green">{income.toFixed(2)}</p>
          <p className="red">-{totalExpenses.toFixed(2)}</p>
          <hr />
          <p className={remaining > 0 ? 'green' : remaining < 0 ? 'red' : ''}>
            {remaining.toFixed(2)}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
