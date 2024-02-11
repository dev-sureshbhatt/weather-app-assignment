import React, { useState } from 'react'
import MultipleLocationContext from './MultipleLocationContext'




export default function MultipleLocationContextProvider({children}) {



const [multipleLocationData, setMultipleLocationData] = useState([{data: {currentConditions: {}}}])

  return (
    <MultipleLocationContext.Provider value={{multipleLocationData, setMultipleLocationData}}>
    {children}
    </MultipleLocationContext.Provider>
  )
}
