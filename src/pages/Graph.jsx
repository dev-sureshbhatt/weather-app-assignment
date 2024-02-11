import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'
import StateInfo from '../components/StateInfo'

export default function Graph() {

  
  const [allLocationData, setAllLocationData] = useState([])

  const location = ["Chattisgarh","Mumbai","Uttarakhand","Assam","Kerala","Tamilnadu","uttarpradesh","himachal","haryana","punjab","sikkim","rajasthan","bihar","manipur","meghalaya"]
  const getURLData = []

  function testing(){
    try {

      location.forEach((location, index)=>{
        getURLData[index] = axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json`)
      })


     axios.all(getURLData).then(
      axios.spread((...allNewdata)=>{setAllLocationData(allNewdata)})
     )
      

    } catch (error) {
      console.log('something went wrong')
    }

    
  }



  return (
    <div className='graph-page-wrapper'>
      <button onClick={testing}>Hi, I am testing button</button>
      
      {
                    location.map((data)=>
                    <StateInfo value={{location: data}} />
                    
                    )
                }
    </div>
  )






  }
