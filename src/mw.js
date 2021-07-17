import React, {useEffect, useState} from 'react'
import './App.css';
import SMGs from './coldwar';
import Shotguns from './Shotguns';
import SM from './SM';
import Other from './Other';
import Nav from './Nav';
import BottomNav from './bottomNav'
import Loadouts1 from './Loadout'; 
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import App from './App' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faLinkedin, faGithub, faDiscord, faInstagram} from "@fortawesome/free-brands-svg-icons"

const AR = () => {


  const [classesAR, setClassesAR] = useState([]);
  const [searchAR, setSearchAR] = useState('');
  const [queryAR, setQueryAR] = useState()
  
  useEffect(() => {
    fetchLoadoutsAR();
  }, []);

  
  const fetchLoadoutsAR = async () => {
      const data = await fetch('https://sheet.best/api/sheets/559f43d6-2dd4-436d-b4ac-45320b31fd11')

      const loadoutsAR = await data.json()
      console.log(loadoutsAR);
      setClassesAR(loadoutsAR);        
    }

  const [searchTermAR, setSearchTermAR] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();
  }
 

    return (
  
    <div className="App">

        <h1 id='page-heading'>ARs</h1>

          <div className='form-div'>
          <form onSubmit={handleSubmit} >
            <h2 className='searchText'> Search For a Gun</h2>
          <input className="search-bar" type="text" placeholder="Search..." onChange={event => {setSearchTermAR(event.target.value)}} />

        
          </form>
          </div> 
          <ul>
          
          </ul> 
        <div className='cards'>
        {classesAR.slice('0','17').filter((classe)=> {
          if (searchTermAR == '') {
            return classe.gun 
          } else if (classe.gun.toLowerCase().includes(searchTermAR.toLowerCase())) {
            return classe.gun
                        
           
          }
          else if (classe.type.toLowerCase().includes(searchTermAR.toLowerCase())) {
    
            return classe.type
          } 
        }
        ).map(classe =>(
          <Loadouts1 key={classe.gun}
          type={classe.type} 
          gun={classe.gun}
          a1={classe.attachment1} 
          a2={classe.attachment2}
          a3={classe.attachment3}
          a4={classe.attachment4}
          a5={classe.attachment5}
          image={classe.image}/>
        ))}
        </div>  


        

      </div>

      



      

        ) };

        
      

export default AR;
