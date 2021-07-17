import React from 'react'
import style from './loadout.module.css';

const Loadouts1 = ({type, gun, a1, a2, a3, a4, a5, image}) => {
    return(
        <div className={style.loadout} >
            <h1>{gun}</h1>
            <h3>{type}</h3>
            <img className='img' src={image} alt='' />
            <p>{a1}</p>
            <p>{a2}</p>
            <p>{a3}</p>
            <p>{a4}</p>
            <p>{a5}</p>
        

          
         
            
        </div>
    )
}

export default Loadouts1 ;