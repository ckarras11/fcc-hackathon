import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import logo from '../images/SpareChange-logo.png'
import hero from '../images/coinstack.png'

/* import Logo from '../components/logo';
import Hero from '../components/hero'; */

import {
  getAllExpenses,
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from '../utils/hasura'
import '../styles/landing.css'

const LandingPage = ({ classes }) => (
  <React.Fragment>
    <div className="container-global">
      <header>
        <div className="container-image" style={{ maxWidth: '150px' }}>
          <img
            src="https://res.cloudinary.com/ckarras/image/upload/f_auto,w_auto/SpareChange/SpareChange-logo.png"
            alt="spare change logo"
          />
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
            <img
              src="https://res.cloudinary.com/ckarras/image/upload/f_auto,w_auto/v1541337583/SpareChange/coinstack.png"
              alt="coin stack and paper money"
            />
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
    <section className="container-cards">
      <Card className="card">
        <CardContent>
          <h1>Card 1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card className="card">
        <CardContent>
          <h1>Card 2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </section>
    <footer>
      <p className="footer-message">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>© 2018 SpareChange</p>
    </footer>
  </React.Fragment>
)

// getAllExpenses().then(res => console.log(res))
// getExpenses(1).then(res => console.log(res))

// const expense = {
//   id: '13',
//   name: 'Test from index.js',
//   description: 'I hope this works :)',
//   amount: 55.55,
//   date: '2018-10-30',
//   userID: 13,
// }

// deleteExpense(expense)
//   .then(res => console.log(res))
//   .catch(e => console.log(e))

export default LandingPage
