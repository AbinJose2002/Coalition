import React from 'react'
import { Link } from 'react-router-dom'
Link

export default function Diary() {
  return (
    <div>
        <h2 className="text-center py-4">Daily Diary</h2>
      <nav className="navbar navbar-expand-lg navbar-light">

  <div className="collapse navbar-collapse center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto py-4">
      <li className="nav-item active">
        <Link className="nav-link" to="/day1">Day 1 <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/day2">Day 2</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/day3">Day 3</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/day4">Day 4</Link>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}
