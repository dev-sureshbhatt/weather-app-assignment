import React, { useState } from 'react'
import MultipleLocationContext from './MultipleLocationContext'




export default function MultipleLocationContextProvider({children}) {



const [multipleLocationData, setMultipleLocationData] = useState([{
  
"data": {
  resolvedAddress: "Fetching",
  description: "Fetching",
  data: {},
  currentConditions: {
    temp: "fetching",
    feelslike: "fetching",
    humidity: "fetching",
    windspeed: "fetching",
    winddir: "fetching",
    conditions: "fetching", 
    sunrise:"fetching",
    sunset: "fetching"
  }
}},
{
  
  "data": {
    resolvedAddress: "Fetching",
    description: "Fetching",
    data: {},
    currentConditions: {
      temp: "fetching",
      feelslike: "fetching",
      humidity: "fetching",
      windspeed: "fetching",
      winddir: "fetching",
      conditions: "fetching", 
      sunrise:"fetching",
      sunset: "fetching"
    }
  }},
  {
  
    "data": {
      resolvedAddress: "Fetching",
      description: "Fetching",
      data: {},
      currentConditions: {
        temp: "fetching",
        feelslike: "fetching",
        humidity: "fetching",
        windspeed: "fetching",
        winddir: "fetching",
        conditions: "fetching", 
        sunrise:"fetching",
        sunset: "fetching"
      }
    }},
    {
  
"data": {
  resolvedAddress: "Fetching",
  description: "Fetching",
  data: {},
  currentConditions: {
    temp: "fetching",
    feelslike: "fetching",
    humidity: "fetching",
    windspeed: "fetching",
    winddir: "fetching",
    conditions: "fetching", 
    sunrise:"fetching",
    sunset: "fetching"
  }
}},
{
  
  "data": {
    resolvedAddress: "Fetching",
    description: "Fetching",
    data: {},
    currentConditions: {
      temp: "fetching",
      feelslike: "fetching",
      humidity: "fetching",
      windspeed: "fetching",
      winddir: "fetching",
      conditions: "fetching", 
      sunrise:"fetching",
      sunset: "fetching"
    }
  }},
  {
  
    "data": {
      resolvedAddress: "Fetching",
      description: "Fetching",
      data: {},
      currentConditions: {
        temp: "fetching",
        feelslike: "fetching",
        humidity: "fetching",
        windspeed: "fetching",
        winddir: "fetching",
        conditions: "fetching", 
        sunrise:"fetching",
        sunset: "fetching"
      }
    }},
    {
  
      "data": {
        resolvedAddress: "Fetching",
        description: "Fetching",
        data: {},
        currentConditions: {
          temp: "fetching",
          feelslike: "fetching",
          humidity: "fetching",
          windspeed: "fetching",
          winddir: "fetching",
          conditions: "fetching", 
          sunrise:"fetching",
          sunset: "fetching"
        }
      }},
      {
  
        "data": {
          resolvedAddress: "Fetching",
          description: "Fetching",
          data: {},
          currentConditions: {
            temp: "fetching",
            feelslike: "fetching",
            humidity: "fetching",
            windspeed: "fetching",
            winddir: "fetching",
            conditions: "fetching", 
            sunrise:"fetching",
            sunset: "fetching"
          }
        }},
        {
  
          "data": {
            resolvedAddress: "Fetching",
            description: "Fetching",
            data: {},
            currentConditions: {
              temp: "fetching",
              feelslike: "fetching",
              humidity: "fetching",
              windspeed: "fetching",
              winddir: "fetching",
              conditions: "fetching", 
              sunrise:"fetching",
              sunset: "fetching"
            }
          }},
          {
  
            "data": {
              resolvedAddress: "Fetching",
              description: "Fetching",
              data: {},
              currentConditions: {
                temp: "fetching",
                feelslike: "fetching",
                humidity: "fetching",
                windspeed: "fetching",
                winddir: "fetching",
                conditions: "fetching", 
                sunrise:"fetching",
                sunset: "fetching"
              }
            }},
            {
  
              "data": {
                resolvedAddress: "Fetching",
                description: "Fetching",
                data: {},
                currentConditions: {
                  temp: "fetching",
                  feelslike: "fetching",
                  humidity: "fetching",
                  windspeed: "fetching",
                  winddir: "fetching",
                  conditions: "fetching", 
                  sunrise:"fetching",
                  sunset: "fetching"
                }
              }},
              {
  
                "data": {
                  resolvedAddress: "Fetching",
                  description: "Fetching",
                  data: {},
                  currentConditions: {
                    temp: "fetching",
                    feelslike: "fetching",
                    humidity: "fetching",
                    windspeed: "fetching",
                    winddir: "fetching",
                    conditions: "fetching", 
                    sunrise:"fetching",
                    sunset: "fetching"
                  }
                }},
                {
  
                  "data": {
                    resolvedAddress: "Fetching",
                    description: "Fetching",
                    data: {},
                    currentConditions: {
                      temp: "fetching",
                      feelslike: "fetching",
                      humidity: "fetching",
                      windspeed: "fetching",
                      winddir: "fetching",
                      conditions: "fetching", 
                      sunrise:"fetching",
                      sunset: "fetching"
                    }
                  }},
                  {
  
                    "data": {
                      resolvedAddress: "Fetching",
                      description: "Fetching",
                      data: {},
                      currentConditions: {
                        temp: "fetching",
                        feelslike: "fetching",
                        humidity: "fetching",
                        windspeed: "fetching",
                        winddir: "fetching",
                        conditions: "fetching", 
                        sunrise:"fetching",
                        sunset: "fetching"
                      }
                    }},
                    {
  
                      "data": {
                        resolvedAddress: "Fetching",
                        description: "Fetching",
                        data: {},
                        currentConditions: {
                          temp: "fetching",
                          feelslike: "fetching",
                          humidity: "fetching",
                          windspeed: "fetching",
                          winddir: "fetching",
                          conditions: "fetching", 
                          sunrise:"fetching",
                          sunset: "fetching"
                        }
                      }}




])

  return (
    <MultipleLocationContext.Provider value={{multipleLocationData, setMultipleLocationData}}>
    {children}
    </MultipleLocationContext.Provider>
  )
}
