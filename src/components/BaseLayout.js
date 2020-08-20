import React from 'react'
import {Router, Route, Link, Redirect } from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import RegisterPage from './RegisterPage'
import ProfilePage from './RegisterPage'

const BaseLayout = () => (
    <div className="base">
      <header>
        <p>React Router v5 Browser Example</p>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item nav-link"><Link to='/'>Home</Link></li>
              <li className="nav-item nav-link"><Link to='/about'>About</Link></li>
              <li className="nav-item nav-link"><Link to='/me'>Profile</Link></li>
              <li className="nav-item nav-link"><Link to='/login'>Login</Link></li>
              <li className="nav-item nav-link"><Link to='/register'>Register</Link></li>
              <li className="nav-item nav-link"><Link to='/contact'>Contact</Link></li>
  
            </ul>
          </nav>
      </header>
      <div className="container">
     
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        {/* <Route path="/me" component={ProfilePage} /> */}
        <Route path="/me">
          <Redirect to="/" />
        </Route>
      
      </div>
      <footer>
          React Router v5 Browser Example (c) 2017
      </footer>
    </div>
  )

  export default BaseLayout
  