import React, { FC } from 'react';
import { CurrentWeather } from '../models/current-weather.interface';

interface ResultProps {
    currentWeather: CurrentWeather | null;
}

const Result: FC<ResultProps> = ({ currentWeather}) => {

    const iconcode = currentWeather !== null ? currentWeather.weather[0].icon : ""
    const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    const styles = { 
        wrapper: {
            display: 'flex',
            justifyContent: "center",
            flexDirection: 'column',
            margin: "0 auto",
            width: "80%"
        },
        icon: {
            width: '90px'
        }
    
    }

    return (
        <div style={styles.wrapper as React.CSSProperties}>

            <div className='d-flex'>
                <h1>
                    { currentWeather !== null && currentWeather.name}
                </h1>

                <img style={styles.icon} src={iconurl} alt="Weather icon"></img>
            </div>

            <div>
                <p>
                    Description: { currentWeather !== null ? currentWeather.weather[0].description : ""}
                </p>

                <p>
                    Current Temp: { currentWeather !== null ? currentWeather.main.temp : ""} &#176;F
                </p>
                <p>
                    Feels like: { currentWeather !== null ? currentWeather.main.feels_like : ""} &#176;F
                </p>
                <p>
                    Wind speed: { currentWeather !== null ? currentWeather.wind.speed : ""}mph
                </p>
            </div>
        </div>
    )
};

export default Result;