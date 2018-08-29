import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello</h1>
    <p>This project is for the FCC Hackathon on October 27-28</p>
    <p>
      My name is Christopher Karras and I work as a web applications developer
      for a non-profit. This will be my first hackathon
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
