import '../src/App.css'
import React, { useState } from 'react'
import cloudy from './assets/static/cloudy-day-1.svg'
import Header from './components/Header'
import { useContext } from 'react'
import WeatherContext from './context/WeatherContext'



function App() {

  const {fetchedData} = useContext(WeatherContext)
const {resolvedAddress, description, currentConditions, days} = fetchedData
const {conditions, feelslike, humidity, temp, winddir, windspeed} = currentConditions
console.log("humidity", humidity, "resolved address is", resolvedAddress, "descriotion is", description, "feels",feelslike, "temp:", temp, "wind direction is", winddir, "windspeed is", windspeed)

const today = days[0]



 const currentDate0 = new Date()
 const currentDate = currentDate0.toDateString()
 
 


  return (
  <div className='app-wrapper'>
      <Header />

      <div className='weather-info-wrapper'>
        <h1>{resolvedAddress}</h1>
        <div className='weather-card-wrapper'>
          <div className='weather-card-left'>
            <p>{currentDate}</p>
            <img className='svg'
              src={cloudy}></img>
              <p>{conditions}</p>
              <p className='temp-display'>{temp}</p>
            <p>Feels Like: {feelslike}</p>
            
            
            
            
            
          </div>
          <div className='weather-card-right'>
            
            <div className='other-info'>
            <p>{description}</p>

            <div className='other-info-copies'>
                <div>Temperature max</div>
                <div>{today.tempmax}</div>
              </div>
              <div className='other-info-copies'>
                <div>Temperature min</div>
                <div>{today.tempmin}</div>
              </div>
              <div className='other-info-copies'>
                <div>Humidity</div>
                <div>{humidity}</div>
              </div>
              <div className='other-info-copies'>
                <div>Wind Direction</div>
                <div>{winddir}</div>
              </div>
              <div className='other-info-copies'>
                <div>WindSpeed</div>
                <div>{windspeed}</div>
              </div>
              
              </div>
            
            
          </div>

        </div>
      <div className='past-weather-info'>
        <div className='past-weather-info-1'></div>
        <div className='past-weather-info-2'></div>
        <div className='past-weather-info-3'></div>
        <div className='past-weather-info-4'></div>
        <div className='past-weather-info-5'></div>
      </div>

      </div>
  </div>
  )
}

export default App