import './App.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'



function Nav() {

    const [showLinks, setShowLinks] = useState(false);
    const navStyle = {
      color: 'white'
      
    }
  
    return (
      
      <nav>
        <div className="leftside"> 
        <a href='/loadoutsApp/home'>WZ Loadouts</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}className='nav-button'> <span></span>
        <span></span>
        <span></span>
        <span></span>SORT</button>

      <div className='rightside'>
        <div className='the-links' id={showLinks ? 'hidden' : ''}>
        <a href='/loadoutsApp/All'>All Guns</a>
        <a href='/loadoutsApp/ARs'>Assault Rifles</a>
        <a href='/loadoutsApp/SMGs'>SMGs</a>
        <a href='/loadoutsApp/Shotguns'>Shotguns</a>
        <a href='/loadoutsApp/LMGs'>LMGs</a>
        <a href='/loadoutsApp/SM'>Snipers</a>
        <a href='/loadoutsApp/Other'>Other</a>
        
        </div>

        </div>



      </nav>










    );
  }

export default Nav;
