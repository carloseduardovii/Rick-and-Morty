import React, { useState, useEffect, } from 'react';
import axios from 'axios';

const ResidentInfo = ({residentUrl}) => {

  const [ resident, setResident ] = useState({});

  useEffect(() => {
    axios.get(residentUrl).then((res) => setResident(res.data));
  },[residentUrl] )
  console.log(residentUrl)
  return (
    <section className='card'>
      
        <h4>{resident.name}</h4>
     
        
          <img className='card-img'src={resident.image} alt=""/>
      
        <div className='card-info'>
        <small><b>Status</b></small>
          <p>{resident.status}</p>
        <small><b>Origin</b></small>
          <p>{resident.origin?.name}</p>
        <small><b>Episode</b></small>
          <p>{resident.episode?.length}</p>
        </div>
    </section> 
       
  )
}

export default ResidentInfo