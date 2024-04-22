
import React, { useState, useEffect } from 'react';
import WeatherService from '../../services/WeatherService';
import './hourlyForecast.scss';

import clear2 from '../../resources/img/clear2.png'
import clouds1 from '../../resources/img/clouds1.png'
import navigation1 from '../../resources/img/navigation/navigation1.png'
import navigation2 from '../../resources/img/navigation/navigation2.png'


const HourlyForecast = () => {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const weatherService = new WeatherService();
        const id = 'Kyiv';

        weatherService.getForecastIndexes(id)
            .then(res => {
                let filteredHours = res.forecast.forecastday[0].hour.filter(hour => {
                    const hourOfDay = new Date(hour.time).getHours();
                    return hourOfDay === 12 || hourOfDay === 14 || hourOfDay === 16 || hourOfDay === 18;
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
    }, []);

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