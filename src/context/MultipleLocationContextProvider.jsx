import React, { useState } from 'react'
import MultipleLocationContext from './MultipleLocationContext'




export default function MultipleLocationContextProvider({children}) {



const [multpleLocationData, setMultipleLocationData] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])

  return (
    <MultipleLocationContext.Provider value={{multpleLocationData, setMultipleLocationData}}>
    {children}
    </MultipleLocationContext.Provider>
  )
}
