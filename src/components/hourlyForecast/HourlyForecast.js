import React, { useState, useEffect } from 'react';
import './hourlyForecast.scss';

import navigation1 from '../../resources/img/navigation/navigation1.png'


const HourlyForecast = ({ city, getResource }) => {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        
        getResource(`https://api.weatherapi.com/v1/forecast.json?key=d4482eb276b541a8a1b161131240804&q=${city}&days=1&aqi=yes&alerts=no`)
            .then(res => {
                let filteredHours = res.forecast.forecastday[0].hour.filter(hour => {
                    const hourOfDay = new Date(hour.time).getHours();
                    return hourOfDay === 12 || hourOfDay === 15 || hourOfDay === 18 || hourOfDay === 21;
                });

                const midnightHour = res.forecast.forecastday[0].hour.find(hour => {
                    const hourOfDay = new Date(hour.time).getHours();
                    return hourOfDay === 0;
                });

                if (midnightHour) {
                    filteredHours.push(midnightHour);
                }

                setForecastData(filteredHours);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, [city, getResource]);

    return (
        <div className="timetable__module">
            <div className="timetable__hourly">
                <p className="timetable__hourly-name">Hourly Forecast: </p>
            </div>
            
            <div className="timetable__info">
                {forecastData && forecastData.map((hour, index) => (
                    <div key={index} className='timetable__block'>
                        <p className="timetable__block-time">{hour.time.slice(11)}</p>
                        <div className="timetable__block-photo"> 
                            <img src={hour.condition.icon} alt="photo" />
                        </div>
                        <p className="timetable__block-celsius">{hour.temp_c}°C</p>
                        <div className="timetable__block-navigation"> 
                            <img src={navigation1} alt="photo" />
                        </div>
                        <p className="timetable__block-speed">{hour.wind_kph}km/h</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;