import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

import Logo from '../components/logo'
import Hero from '../components/hero'
import withRoot from '../withRoot'
import '../styles/landing.css'

const IndexPage = () => (
  <div className="container-global">
    <header>
      <div className="container-image" style={{ maxWidth: '150px' }}>
        <Logo />
      </div>
    </header>
    <main className="main-landing">
      <div className="main-left">
        <h1>Welcome to SpareChange</h1>
        <p>Click the button below to go to your Dashboard</p>

        <Link to="/Dashboard">
          <Button variant="contained" color="primary">
            Dashboard
          </Button>
        </Link>
      </div>
      <div className="main-right">
        <div className="container-image" style={{ maxWidth: '250px' }}>
          <Hero />
        </div>
      </div>
    </main>
  </div>
)

export default withRoot(IndexPage)
