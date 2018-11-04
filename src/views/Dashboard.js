import React from 'react'

import Layout from '../components/layout'
import Donut from '../components/chart'
import '../styles/dashboard.css'

let data = [
  { kind: 'Dining', value: 100, color: '#aaac84' },
  { kind: 'Food', value: 200, color: '#dce7c5' },
  { kind: 'Gas', value: 50, color: '#e3a51a' },
  { kind: 'more', value: 100, color: '#aaac84' },
  { kind: 'stuff', value: 200, color: '#dce7c5' },
  { kind: 'here', value: 50, color: '#e3a51a' },
]

let income = 2400
let totalExpenses = data.reduce((a, b) => (a += b.value), 0)
let remaining = income - totalExpenses

const Dashboard = () => (
  <Layout>
    <h1>Dashboard</h1>
    <p>Welcome to dashboard</p>
    <div className="dashboard__overview">
      <Donut data={data} />
      <div className="dashboard__totals">
        <p className="green">{income}</p>
        <p className="red">-{totalExpenses}</p>
        <hr />
        <p className={remaining > 0 ? 'green' : remaining < 0 ? 'red' : ''}>
          {remaining}
        </p>
      </div>
    </div>
  </Layout>
)

export default Dashboard
