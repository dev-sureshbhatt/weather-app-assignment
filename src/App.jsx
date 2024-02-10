import '../src/App.css'
import React from 'react'
import cloudy from './assets/static/cloudy-day-1.svg'



function App() {
  return (
  <div className='app-wrapper'>
      <div className='header'>
        <input type='text'>

        </input>
        <button>Check Weather</button>
      </div>
      <div className='weather-info-wrapper'>
        <h1>Delhi, In</h1>
        <div className='weather-card-wrapper'>
          <div className='weather-card-left'>
            <p>Date</p>
            <p>Time</p>
            <p>Temp</p>
            <p>Feels Like</p>
          </div>
          <div className='weather-card-right'>
            <div className='icon-message'>
            <img 
              src={cloudy} width={100} height={100}></img>
            <p>Similar temperatures continuing with no rain expected</p>
            </div>
            <div className='other-info'>
              <ul>
              <li>Temp Min: </li>
              <li>Temp Max:</li>
                <li>Wind Speed:</li>
                <li>Humidity:</li>
                <li>Wind Speed</li>
                <li>Wind Direction</li>
              </ul>

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