import axios from 'axios'
import React, { useEffect, useState } from 'react'



export const LocationInfo = () => {

  const [location, setLocation] = useState({})

useEffect(() => {
  const random = Math.floor(Math.random() * 126) + 1
   
  axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res => setLocation(res.data))
  }, [])
  console.log(location)
  return (
    <section className='location'>
      <div className='location-box'>
        <section className='location-info'>
        <h4>Universe</h4>
        <h2>{location.name}</h2>
        <div>
        <ul>
          <li><b>Type: </b>{location.type}</li>
          <li><b>Dimension: </b>{location.dimension}</li>
          <li><b>Residents: </b>{location.residents?.length}</li>
        </ul>
        </div>
        </section>
      </div>
    </section>
  )
}

export default LocationInfo