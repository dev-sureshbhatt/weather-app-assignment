import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import StateInfo from '../components/StateInfo'

export default function Graph() {

  const [allLocationData, setAllLocationData] = useState([])

  const location = ["Chattisgarh","Mumbai","Uttarakhand","Assam","Kerala","Tamilnadu","uttarpradesh","himachal","haryana","punjab","sikkim","rajasthan","bihar","manipur","meghalaya"]
  const getURLData = []

  useEffect(()=>{
    try {


      async function fetchData(){
        location.forEach((location, index)=>{
          getURLData[index] = axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json`)
        })
  
       axios.all(getURLData).then(
        axios.spread((...allNewdata)=>{setAllLocationData(allNewdata)})
       )

      }


      fetchData()

      
      

    } catch (error) {
      alert('Something went wrong, please refresh')
    }

  },[])


  



  return (
    <div className='graph-page-wrapper'>
         
      {
                    location.map((data)=>
                    <StateInfo value={{location: data}} />
                    
                    )
                }
    </div>
  )






  }
