

Technology Stack: ReactJs
In the project (client) directory, you can run:
### `npm start`


API Used: https://www.visualcrossing.com/

NOTE: 
- Since this is a free API service, there are more chances of API exceeding its daily limit. In case this happens, please sign up to the above website and generate the API key. The API key needs to be pasted in the header.jsx page. One addition key is also available in the header page


- Error Traces and Console Logs are not removed from the code


Achievements: 
- Implemented public weather API and used the required data from their endpoint response
- Users can search for a location (worldwide) by name and see the current temperature and weather conditions
- Users can switch between Celcius and Fahrenheit units of measurement
- App includes a recent searches feature that displays recent searches by used
- Error handling 
- Created a Layout file and wrapped it in main route to keep navigation and header bar same throughout website
- Created another feature (URL: /graph) that displays weather data for 15 states: Implemented Axios for sending bulk requests and destructured/formatted the data to display on the UI.
- Used React hooks such as useEffect() and useContext() to create global state of the information fetched from API and used it later on components (wherever required)  

![alt text](<Screenshot 2024-02-12 091450.png>)

![alt text](<Screenshot 2024-02-12 091601.png>)
![alt text](<Screenshot 2024-02-12 091630.png>)