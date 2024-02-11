import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import searchbtn from '../assets/Other/search-svg.svg' 

function Header() {

    useEffect(()=>{
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Noida?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json')
        .then((response)=>{
            if (response.ok)
            {response.json().then(info=>setFetchedData(info)).catch((err)=>{console.log(err)})} else
            {
                response.text().then((response)=>{
                    
                    if (response === "You have exceeded the maximum number of daily result records for your account. Please add a credit card to continue retrieving results.")
                    {alert("Our server is receiving too many requests, please try again after some time")}
                }

                    

                ).catch(err => console.log(err))
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })


    }, [])

    const {setFetchedData} = useContext(WeatherContext)


  

    
    const [location, setLocation] = useState('')
    const [searches, setSearches] = useState([])
    


    async function handleSubmit(){
        
        //for recent searches
        setSearches([...searches, location])
        
        //

        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json`)
            const data = await response.json()
            setFetchedData(data)  

        } catch (error) {
            console.log(error)
        }

    }

    //for recent searches
    useEffect(()=>{
        window.localStorage.setItem('recent', JSON.stringify(searches))
    }, [searches])
    
    const lastFiveSearches = searches.slice(-5)
    //
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
        <div className='recent-searches'>
            <p>Recent Searches:</p> 
                {
                    lastFiveSearches.map((data)=>
                    <p>{data}</p>
                    )
                }
        </div>
        
        
    </div>
  )
}

export default Header