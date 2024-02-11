import React, { useState } from 'react'
import { useContext } from 'react'


export default function StateInfo({value}) {

  return (
    
        <div 
        className='state-card'>
          <p className='state-card-country-name'>{value?.target[0]}</p>
          <p className='state-card-temp-display'>{value?.target[1]}</p>
        </div>
  )
}
