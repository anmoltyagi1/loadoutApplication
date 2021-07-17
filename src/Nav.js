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
        <Link to='/loadoutApplication/' ><h2>WZ LOADOUTS</h2> </Link>
        
        </div>
        <button onClick={() => setShowLinks(!showLinks)}className='nav-button'> <span></span>
        <span></span>
        <span></span>
        <span></span>SORT</button>

      <div className='rightside'>
        <div className='the-links' id={showLinks ? 'hidden' : ''}>

          <ul className='list-link'>
            <Link to='/All'><p>All Guns</p> </Link>
            <Link to='/ARs'><p>Assault Rifles</p> </Link>
            <Link to='/SMGs'><p>SMGs</p> </Link>
            <Link to='/LMGs'><p>LMGs</p> </Link>
            <Link to='/Shotguns'><p>Shotguns</p> </Link>
            <Link to='/SM'><p>Snipers</p> </Link>
            <Link to='/Other'><p>Other</p> </Link>

          </ul>
        
        
        </div>

        </div>



      </nav>










    );
  }

export default Nav;
