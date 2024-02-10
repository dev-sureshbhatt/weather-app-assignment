import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'
import StateInfo from '../components/StateInfo'

export default function Graph() {

  
  const [allLocationData, setAllLocationData] = useState([])
  


  function fetchData(){

    try {
      const URL1 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Chattisgarh?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL2 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Mumbai?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL3 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Uttarakhand?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL4 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/assam?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL5 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kerala?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL6 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tamilnadu?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL7 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Uttarpradesh?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL8 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/himachal?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL9 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/haryana?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL10 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/punjab?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL11 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/sikkim?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL12 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/rajasthan?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL13 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bihar?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL14 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/manipur?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const URL15 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/meghalaya?unitGroup=metric&key=DUZYGZW839GGCYG4GRFT6XQJG&contentType=json'
      const data1 = axios.get(URL1)
      const data2 = axios.get(URL2)
      const data3 = axios.get(URL3)
      const data4 = axios.get(URL4)
      const data5 = axios.get(URL5)
      const data6 = axios.get(URL6)
      const data7 = axios.get(URL7)
      const data8 = axios.get(URL8)
      const data9 = axios.get(URL9)
      const data10 = axios.get(URL10)
      const data11 = axios.get(URL11)
      const data12 = axios.get(URL12)
      const data13 = axios.get(URL13)
      const data14 = axios.get(URL14)
      const data15 = axios.get(URL15)
      
  
      axios.all([data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15]).then(
        axios.spread((...allData)=>{

          setAllLocationData(allData)
          //l1 -location1
          // setLocation1(allData[0])
          // setLocation2(allData[1])
          // setLocation3(allData[2])
          // setLocation4(allData[3])
          // setLocation5(allData[4])
          // const l6 = allData[5]
          // const l7 = allData[6]
          // const l8 = allData[7]
          // const l9 = allData[8]
          // const l10 = allData[9]
          // const l11 = allData[10]
          // const l12 = allData[11]
          // const l13 = allData[12]
          // const l14 = allData[13]
          // const l15 = allData[14]
  
          // console.log(l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15)
        }))
  
    } catch (error) {
      console.log(error)
    }
  
  }



  return (
    <div className='graph-page-wrapper'>
      <button onClick={fetchData}>Fetch</button>
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
      <StateInfo />
    </div>
  )






  }
