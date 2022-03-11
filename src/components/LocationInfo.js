import axios from 'axios'
import React, { useEffect, useState } from 'react'



export const LocationInfo = () => {

  const [universe, setUniverse] = useState({})

useEffect(() => {
  const random = Math.floor(Math.random() * 126) + 1
   
  axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res => setUniverse(res.data))
  }, [])

  return (
    <div>
      <h1>{universe.name}</h1>
      <p>{universe.type}</p>
      <p>{universe.dimension}</p>
      <p>{universe.residents}</p>


    </div>
  )
}

export default LocationInfo