import React from 'react'
import img from '../assets/grp-imag.jpeg'
import './Team.css'

export default function Team() {
  return (
    <div className='container bg-light team row mx-auto' id='team'>
      <div className="col col-sm-12 col-lg-6">
        <div className="desc px-5 py-5">
            <h1 text-center>Meet The Team</h1>
            <ul className='py-3 team-list'>
                <li className='py-3'>Maria kurian(C)</li>
                <li className='py-3'>Jasna jaleel(VC)</li>
                <li className='py-3'>Vighnesh Vijay</li>
                <li className='py-3'>Krishnadas Kk</li>
                <li className='py-3'>Shalu jiji</li>
                <li className='py-3'>Varsha C Vasudevan</li>
                <li className='py-3'>Meera Udayakumar</li>
                <li className='py-3'>Sreelekha PG</li>
                <li className='py-3'>Jalvy Jaicky</li>
            </ul>
        </div>
      </div>
      <div className="col col-sm-12 col-lg-6 img-sec">
        <img src="{img}" alt="This is an image of the team members" className='grp-img py-3'/>
      </div>
    </div>
  )
}
