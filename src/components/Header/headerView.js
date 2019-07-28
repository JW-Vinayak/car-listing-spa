import React from 'react'
import logo from '../../assets/company-logo.png'

const Header = () => (
  <header className='header'>
    <div className='header-logo'>
      <img
        className='logo'
        src={logo} alt='Company'
      />
    </div>
    <div className='header-menu'>
      <a href='##' className='header-link'>Purchase</a>
      <a href='##' className='header-link'>My Orders</a>
      <a href='##' className='header-link'>Sell</a>
    </div>
  </header>
)

export default Header
