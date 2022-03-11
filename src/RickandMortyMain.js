import React from 'react'
import SearchBox from './components/SearchBox'
import LocationInfo from './components/LocationInfo'
import ResidentsList from './components/ResidentsList'

const RickandMortyMain = () => {
  return (
    <div className='content-main'>
        <h1 className='title-main'>Rick and Morty App</h1>
        <SearchBox />
        <h2>Location</h2>
        <LocationInfo />
        <h2>List Cards</h2>
        <ResidentsList />
        
    </div>
  )
}

export default RickandMortyMain