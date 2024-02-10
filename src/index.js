import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherContextProvider from './context/WeatherContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Graph from './pages/Graph';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='/graph' element={<Graph />} />
        </Route>
    </Routes>
    </BrowserRouter>
    </WeatherContextProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
