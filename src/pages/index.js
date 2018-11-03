import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import Logo from '../components/logo'
import Hero from '../components/hero'
import withRoot from '../withRoot'
import { getAllExpenses, getExpenses, addExpense } from '../utils/hasura'
import '../styles/landing.css'

const IndexPage = ({ classes }) => (
  <React.Fragment>
    <div className="container-global">
      <header>
        <div className="container-image" style={{ maxWidth: '150px' }}>
          <Logo />
        </div>
      </header>
      <main className="main-landing">
        <div className="main-left">
          <h1>SpareChange</h1>
          <p>Helping you stay on budget</p>

          <Link to="/Dashboard">
            <Button variant="contained" color="primary">
              Dashboard
            </Button>
          </Link>
        </div>
        <div className="main-right">
          <div className="container-image-hero" style={{ maxWidth: '250px' }}>
            <Hero />
          </div>
        </div>
      </main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="rgb(249,249,249)" points="0,100 100,0 100,100" />
      </svg>
    </div>

    <Card className="card">
      <CardContent>
        <h1>test</h1>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </React.Fragment>
)

// getAllExpenses().then(res => console.log(res))
// getExpenses(1).then(res => console.log(res))

const expense = {
  name: 'Test from index.js',
  description: 'I hope this works :)',
  amount: 55.55,
  date: "2018-10-30",
  userID: 1
}

addExpense(expense).then(res => console.log(res))

export default withRoot(IndexPage)
