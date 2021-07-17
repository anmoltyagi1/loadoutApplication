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
        <Link to='/loadoutApplication/'><li>WZ LOADOUTS</li> </Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}className='nav-button'> <span></span>
        <span></span>
        <span></span>
        <span></span>SORT</button>

      <div className='rightside'>
        <div className='the-links' id={showLinks ? 'hidden' : ''}>

          <ul className='list-link'>
            <Link to='/All'><li>All Guns</li> </Link>
            <Link to='/ARs'><li>Assault Rifles</li> </Link>
            <Link to='/SMGs'><li>SMGs</li> </Link>
            <Link to='/LMGs'><li>LMGs</li> </Link>
            <Link to='/Shotguns'><li>Shotguns</li> </Link>
            <Link to='/SM'><li>Snipers</li> </Link>
            <Link to='/Other'><li>Other</li> </Link>

          </ul>
        
        
        </div>

        </div>



      </nav>










    );
  }

export default Nav;
