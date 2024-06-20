import React from 'react'
import img from '../assets/grp-imag.jpeg'
import './Team.css'

export default function Team() {
  return (
    <div className='container bg-light team row mx-auto'>
      <div className="col col-sm-12 col-lg-6">
        <div className="desc px-5 py-5">
            <h1 text-center>Meet The Team</h1>
            <ul className='py-3 team-list'>
                <li className='py-3'>Abijith V</li>
                <li className='py-3'>Abin Jose</li>
                <li className='py-3'>Anna S Paul</li>
                <li className='py-3'>Anjalikrishna</li>
                <li className='py-3'>Ashil Krishna</li>
                <li className='py-3'>Ashtami M</li>
                <li className='py-3'>Harshitha</li>
            </ul>
        </div>
      </div>
      <div className="col col-sm-12 col-lg-6 img-sec">
        <img src={img} alt="" className='grp-img py-3'/>
      </div>
    </div>
  )
}
