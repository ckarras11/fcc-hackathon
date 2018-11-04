import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import '../styles/landing.css'

const LandingPage = ({ classes, isAuthenticated }) => (
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
              {isAuthenticated ? 'Dashboard' : 'Get Started'}
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
      <div className="card">
        <h2>2018 FCC Hackathon</h2>
        <p>
          This project was created for the 2018 Free Code Camp Hackathon by{' '}
          <a href="https://github.com/ckarras11/">Christopher Karras</a> and{' '}
          <a href="https://github.com/divanoff">Dimo Ivanov</a>. It was built
          using the JAMstack November 3rd and 4th.
        </p>
      </div>
      <Card className="card">
        <CardContent>
          <h2>Overview</h2>
          <p>
            This app helps you keep track of expenses and gives you a visual
            representation of your spending.
          </p>
        </CardContent>
      </Card>
    </section>
    <footer>
      <p>© 2018 SpareChange</p>
    </footer>
  </React.Fragment>
)

export default LandingPage
