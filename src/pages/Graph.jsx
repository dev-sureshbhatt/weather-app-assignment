import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import StateInfo from '../components/StateInfo'
import { useContext } from 'react'
import MultipleLocationContext from '../context/MultipleLocationContext'


export default function Graph() {

  const {multpleLocationData, setMultipleLocationData} = useContext(MultipleLocationContext)
  const location = ["Chattisgarh","Mumbai","Uttarakhand","Assam","Kerala","Tamilnadu","uttarpradesh","himachal","haryana","punjab","sikkim","rajasthan","bihar","manipur","meghalaya"]
  const getURLData = []

  useEffect(()=>{
    
        location.forEach((location, index)=>{
          getURLData[index] = axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json`)
        })
  
       axios.all(getURLData)
       .then(
        axios.spread((...allNewdata)=>{setMultipleLocationData(allNewdata)})
       )
       //error handling when API limit exceeds for the day or if there are network issues with the client
       .catch((err)=>{


        if (err.response){
          
          switch (err.response.data) {
            case "You have exceeded the maximum number of daily result records for your account. Please add a credit card to continue retrieving results.":
              alert("Our server is receiving too many requests, please try again after some time")   
              break;
        }
        } else if (err.message){
          if(err.message) {

            switch (err.message) {
              case "Network Error":
                alert("Please check your network connection")
                break;
            }

          }
        } else {
          console.log(err)
        }
    


       })
       

  },[])


  const locationOneData = multpleLocationData[0].data
  console.log("location 1", locationOneData)

  



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
