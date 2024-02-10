import { useState } from "react";
import WeatherContext from "./WeatherContext";

const WeatherContextProvider = ({children}) => {

    const [fetchedData, setFetchedData] = useState({
        resolvedAddress: null,
        description: null,
        days: [{}],
        currentConditions: {
            feelslike: null, 
            humidity: null, 
            temp: null, 
            winddir: null, 
            windspeed: null
        }
    })
    return(
        <WeatherContext.Provider value={{fetchedData, setFetchedData}}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider