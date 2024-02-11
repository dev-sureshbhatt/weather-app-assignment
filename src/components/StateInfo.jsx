import React, { useState } from 'react'
import { useContext } from 'react'
import {multpleLocationData} from '../context/MultipleLocationContextProvider'
import MultipleLocationContext from '../context/MultipleLocationContext'

export default function StateInfo({value}) {


  const {multipleLocationData} = useContext(MultipleLocationContext)
  

  // const [color, setColor] = useState('')
  // const temp = "green"

  return (
    
        <div 
        // style={{backgroundColor:temp}} 
        className='state-card'>
          <p className='state-card-country-name'>{value?.location}</p>
          <p className='state-card-temp-display'>{value?.temp}</p>
        </div>
  )
}
