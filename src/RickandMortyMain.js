import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from './components/SearchBox'
import LocationInfo from './components/LocationInfo'
import ResidentsList from './components/ResidentsList'

const RickandMortyMain = () => {

  const [ character, setCharacter ] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setCharacter(res.data));
  },[])

  return (
    <div className='container-cards'>
     
      <div className='container-head'>
         <img className='head-img' src={"https://imgs.search.brave.com/1gdl21fPs2fO2xPdqu6_2tmbg6GFPxVh3UgkpkZBnt8/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9oZGRl/c2t0b3B3YWxscGFw/ZXJzLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA2L3Jp/Y2stYW5kLW1vcnR5/LXdhbGxwYXBlci5q/cGc"} alt=""/>
      </div> 
      <div className='title-main'>
         <h1>Rick and Morty</h1>
      </div>
        <SearchBox setCharacter={setCharacter}/>
        <LocationInfo />
        {/* <h2>{character?.name}</h2> */}
        <ResidentsList residents={character.residents}/>
        <footer>
          <h6>Copyright ©2022 </h6>
          <p>Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective <br />
          This API is open source and uses a BSD license.</p>
          <p><b>❮'by Ariel Fuentes García & Carlos Eduardo Rodriguez 2022'❯</b></p>
        </footer>
    </div>
  )
}

export default RickandMortyMain