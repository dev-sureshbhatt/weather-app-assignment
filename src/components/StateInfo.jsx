import React, { useState } from 'react'
import { useContext } from 'react'


export default function StateInfo({value}) {



  

  // const tempTemp = value.target[1] > 20
  const Temp = value.target[1]
  const isHot = Temp <= 20
  console.log(Temp, isHot)

  // const isHot = 21 > 0
  // console.log(isHot, "ishot")



  return (

<>
    {
      (isHot) ? (<div style={{backgroundColor: 'green'}}className='state-card'>
    <p className='state-card-country-name'>{value?.target[0]}</p>
    <p className='state-card-temp-display'>{value?.target[1]}</p>
  </div>) : (<div style={{backgroundColor: 'red'}}className='state-card'>
    <p className='state-card-country-name'>{value?.target[0]}</p>
    <p className='state-card-temp-display'>{value?.target[1]}</p>
  </div>)}
  </>      
  )
}
