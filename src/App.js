import React, {useEffect, useState} from 'react'
import './App.css';
import SMGs from './coldwar';
import AR from './mw';
import LMGs from './LMGs';
import Shotguns, {SMGT} from './Shotguns';
import SM, { SniperToggle} from './SM';
import Other from './Other';
import Nav from './Nav';
import BottomNav from './bottomNav'
import Loadouts1 from './Loadout'; 
import SMGcards from './smgcards';
import Radiobuttons from './radiobuttons'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import AllGuns from './all';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faLinkedin, faGithub, faDiscord, faInstagram, faGit} from "@fortawesome/free-brands-svg-icons"
/* eslint-disable */



//MAIN-APP
var AppOn = true;
let num = 3;
var SmgON = true;

const App = () => {

  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchLoadouts();
  }, []);

  
  const fetchLoadouts = async () => {
      const data = await fetch('https://sheet.best/api/sheets/559f43d6-2dd4-436d-b4ac-45320b31fd11')

      const loadouts = await data.json()
      console.log(loadouts);
      setClasses(loadouts);        
    }

  const [searchTerm, setSearchTerm] = useState('');
  

  function handleSubmit(event) {
    event.preventDefault();
  }
    return (
    <div className="App">
      <Router> 
      <Nav />    
          <Switch>
        <Route path="/loadoutApplication/" exact component={Home} />
        <Route path='/ARs' component = {AR}/>
        <Route path ='/SMGs' component = {SMGs} />
        <Route path ='/LMGs' component = {LMGs} />
        <Route path ='/Shotguns' component = {Shotguns} />
        <Route path ='/SM' component = {SM} />
        <Route path ='/Other' component = {Other} />
        <Route path ='/All' component = {AllGuns} />
      </Switch>        
      </Router>

      </div>
        ) 
      };
    
const Home = () => (
  <div>

    <div className='title'>
    <section className='top-section'>
      <div className='heading'>
      <h1></h1>
      <h4>The Best Loadouts in the Game</h4>
      </div>
      
        <div className='btn'>
          <Link to='/All'> <button>BROWSE ALL GUNS</button></Link>

      </div>
    </section>
  
    <section className='first-section'>
      <div className='heading'>
        <h2>About The Site</h2>
      </div>
      <div className='content'>
        <div className='musicBox'>
          <p> The loadouts displayed on this website were all taken from famous Twitch streamer Symfuhny. This site was made for those times you need a loadout right before loading into a game, or when your friend needs the loadout you've been using lately.</p>


          <div className='home-imgs'>
          <img className='homeimg' src='https://www.ispreview.co.uk/wp-content/uploads/2020/08/nggallery_import/call_of_duty_warzone.jpg' alt='' />
          
          <img className='home-sym-img'src='https://setup.gg/wp-content/uploads/2020/05/symfuhny-1.jpg' alt='' />

          </div>
        </div>
      </div>
    </section>


    <section className='about1'>
    <div>    
      <div className='icon'>
      <a href='https://ca.linkedin.com/in/anmol-tyagi-07a410212' className='linkedin'>
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href='https://github.com/anmoltyagi1' className='github'>
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>

          <a href='https://www.instagram.com/_anmoltyagii/' className='instagram'>
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          <p>I do not claim any of the images used on this website to be mine. I have linked the URL where I found the images</p>
        </div>   
      </div>
    </section>
  </div> 
  </div>
)
        
export default App ;


