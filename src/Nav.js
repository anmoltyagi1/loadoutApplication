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
        <a href='/home'>WZ Loadouts</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}className='nav-button'> <span></span>
        <span></span>
        <span></span>
        <span></span>SORT</button>

      <div className='rightside'>
        <div className='the-links' id={showLinks ? 'hidden' : ''}>
        <a href='/All'>All Guns</a>
        <a href='/ARs'>Assault Rifles</a>
        <a href='/SMGs'>SMGs</a>
        <a href='/Shotguns'>Shotguns</a>
        <a href='/LMGs'>LMGs</a>
        <a href='/SM'>Snipers</a>
        <a href='/Other'>Other</a>
        
        </div>

        </div>



      </nav>










    );
  }

export default Nav;
