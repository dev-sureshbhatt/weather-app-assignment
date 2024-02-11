import React from 'react'

export default function StateInfo({value}) {

  
  return (
    
        <div className='state-card'>
          <p className='state-card-country-name'>{value?.location}</p>
          <p className='state-card-temp-display'>15 C</p>
        </div>
  )
}
