import React from 'react'
import './Navbar.css'
import logo from '../assets/Notification Bell Badge Logo.png'

export default function Navbar1() {
  return (
    <div className='px-5 py-3'>
      <nav className="navbar navbar-expand-lg navbar-light px-4">
  <a className="navbar-brand" href="#"><img src={logo} alt="This is the logo" height={80} width={80}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#team">Meet Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#diary">Daily Diary</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#score">Score Table</a>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}
