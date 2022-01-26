import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Weather } from "./api/api"

import Header from "./components/Header";
import Form from "./components/Form";
import { CurrentWeather } from './models/current-weather.interface';
import Result from "./components/Result";

function App() {

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    Weather.getCityCurrentWeather(city)
    .then((data: CurrentWeather) => {
      setCurrentWeather(data);
    })
    .catch((err) => {
      console.error("App.tsx - Weather.getCityCurrentWeather - Error: " + err);
    });
  }, [city]);

  const handleInputChange = (input: string) => {
    const val = input;
    setCity(val);                                                                                     
  }

  return (
    <div className="App">
      
      <Header></Header>
      
      <div className="container">

        <div className='form-container'>
        <Form handleChange={ handleInputChange}></Form>
        </div>

        {/* Results  */}
        { currentWeather !== null && <Result currentWeather={currentWeather} /> }

      </div>
    </div>
  );
}

export default App;
