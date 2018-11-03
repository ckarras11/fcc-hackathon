import React from 'react'

import Layout from '../components/layout'
import Chart from '../components/chart'
import '../styles/dashboard.css'

let data = [
  { key: 'A', value: 100, color: '#aaac84' },
  { key: 'B', value: 200, color: '#dce7c5' },
  { key: 'C', value: 50, color: '#e3a51a' },
]

let income = 2400
let totalExpenses = data.reduce((a, b) => (a += b.value), 0)

const Dashboard = () => (
  <Layout>
    <h1>Dashboard</h1>
    <p>Welcome to dashboard</p>
    <div className="dashboard__overview">
      <Chart data={data} />
      <div>
        <p>{income}</p>
        <p>-{totalExpenses}</p>
        <p>{income - totalExpenses}</p>
      </div>
    </div>
  </Layout>
)

export default Dashboard
