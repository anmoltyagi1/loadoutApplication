import React, {useEffect, useState} from 'react'
import './App.css';
import Loadouts1 from './Loadout'; 
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import App from './App' 

const Other = () => {


  const [classesSMG, setClassesSMG] = useState([]);
  const [searchAR, setSearchAR] = useState('');
  const [queryAR, setQueryAR] = useState()
  
  useEffect(() => {
    fetchLoadoutsSMG();
  }, []);

  
  const fetchLoadoutsSMG = async () => {
      const data = await fetch('https://sheet.best/api/sheets/65855a46-3636-4747-8214-261cfa136ebd')

      const loadoutsSMG = await data.json()
      console.log(loadoutsSMG);
      setClassesSMG(loadoutsSMG);        
    }

  const [searchTermSMG, setSearchTermSMG] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();
  }
 

    return (
  
    <div className="App">

<h1 id='page-heading'>Other</h1>


          <div className='form-div'>
          <form onSubmit={handleSubmit} >
            <h2 className='searchText'> Search For a Gun</h2>
          <input className="search-bar" type="text" placeholder="Search..." onChange={event => {setSearchTermSMG(event.target.value)}} />

        
          </form>
          </div> 
          <ul>
          
          </ul> 
        <div className='cards'>
        {classesSMG.slice('50','51').filter((classe)=> {
          if (searchTermSMG == '') {
            return classe.gun 
          } else if (classe.gun.toLowerCase().includes(searchTermSMG.toLowerCase())) {
            return classe.gun
                        
           
          }
          else if (classe.type.toLowerCase().includes(searchTermSMG.toLowerCase())) {
    
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

        
      

export default Other;