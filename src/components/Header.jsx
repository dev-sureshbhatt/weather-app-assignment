import React, { useState } from 'react'
import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import searchbtn from '../assets/Other/search-svg.svg' 

function Header() {

    const {fetchedData, setFetchedData} = useContext(WeatherContext)

    const [location, setLocation] = useState('')

    async function handleSubmit(){

        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json`)
            const data = await response.json()
            setFetchedData(data)     
        } catch (error) {
            console.log(error)
        }

    }



  return (
    <div className='header'>
        <div className='search-wrapper'>
            <input 
            type='text'
            placeholder='Check weather for any City '
            value={location}
            onChange={(ev)=>{setLocation(ev.target.value)}}
            />
            <button onClick={handleSubmit}>Search</button> 
        </div>
        
    </div>
  )
}

export default Header