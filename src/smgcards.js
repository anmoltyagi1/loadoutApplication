import React, {useEffect, useState} from 'react'
import './App.css';
import SMGs, {sliceValue1, sliceValue2, SMGToggle} from './coldwar';
import AR from './mw';
import LMGs from './LMGs';
import Shotguns, {SMGT} from './Shotguns';
import SM, { SniperToggle} from './SM';
import Other from './Other';
import Nav from './Nav';
import BottomNav from './bottomNav'
import Loadouts1 from './Loadout'; 
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
/* eslint-disable */



function SMGcards() {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetchLoadouts();
      }, []);
    const [classes, setClasses] = useState([]);
    const fetchLoadouts = async () => {
        const data = await fetch('https://sheet.best/api/sheets/911db8f6-346d-4807-864b-dbed781a777e')
  
        const loadouts = await data.json()
        console.log(loadouts);
        setClasses(loadouts);        
      }


  return (

<div>
{ classes.filter((classe)=> {
    if (searchTerm == '') {
      return classe.gun 
    } else if (classe.gun.toLowerCase().includes(searchTerm.toLowerCase())) {

      return classe.gun
                  
     
    }
    else if (classe.type.toLowerCase().includes(searchTerm.toLowerCase())) {

      return classe.type
    } 
    return console.log('hi')
  
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
  ))
        
        }  
 </div>
  );
}

export default SMGcards;


