import React from 'react'
import './Navbar.css'

export default function Navbar1() {
  return (
    <div className='px-5 py-3'>
      <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Meet Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Daily Diary</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Score Table</a>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}
