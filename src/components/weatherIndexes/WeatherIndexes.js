import React, { useEffect, useState } from 'react';
import './weatherIndexes.scss';
import WeatherService from '../../services/WeatherService';

import sunriseLogo from '../../resources/img/Sun/sunrise-white.png'
import sunsetLogo from '../../resources/img/Sun/sunset-white.png'
import SunnyLogo from '../../resources/img/Sun/clearMax.png'
import humidityLogo from '../../resources/img/Sun/humidity.png'
import windLogo from '../../resources/img/Sun/wind.png'
import pressureLogo from '../../resources/img/Sun/pressure-white.png'
import uvLogo from '../../resources/img/Sun/uv-white.png'


const WeatherIndexes = () => {
    const [weatherData, setWeatherData] = useState({
        name: null,
        time: null,
        day: null,
        selsius: null,
        feelsLike: null,
        sunriseAm: null,
        sunsetAm: null,
        condition: null,
        conditionText: null,
        humidityPercent: null,
        pressureIndexes: null,
        windIndexes: null,
        uvIndexes: null
    });

    useEffect(() => {
        const weatherService = new WeatherService();
        const id = 'Kyiv';

        const fetchData = async () => {
            try {
                const res = await weatherService.getForecastIndexes(id);
                setWeatherData({
                    name: res.location.name,
                    time: res.location.localtime.slice(11),
                    day: res.location.localtime.slice(0, 11),
                    selsius: res.current.temp_c,
                    feelsLike: res.current.feelslike_c,
                    sunriseAm: res.forecast.forecastday[0].astro.sunrise,
                    sunsetAm: res.forecast.forecastday[0].astro.sunset,
                    condition: res.forecast.forecastday[0].hour[0].condition.icon,
                    conditionText: res.forecast.forecastday[0].hour[0].condition.text,
                    humidityPercent: res.current.humidity,
                    pressureIndexes: res.current.pressure_mb,
                    windIndexes: res.current.wind_kph,
                    uvIndexes: res.current.uv
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();

    }, []); // Пустой массив означает, что этот эффект выполняется только при монтировании

    const { name, time, day, selsius, feelsLike, sunriseAm, sunsetAm,
        conditionText, humidityPercent, pressureIndexes, windIndexes, uvIndexes } = weatherData;

    return (
        <div className="weather">
            <div className="weather__block">
                <div className="weather__info">
                    <p className="weather__name">{name}</p>
                    <p className="weather__time">{time}</p>
                    <p className="weather__day">{day}</p>
                </div>
            </div>

            <div className="weather__static">
                <div className='weather__firstblock'>
                    <div>
                        <p className="weather__firstblock-celsius">{selsius}</p>
                        <div className='weather__firstblock-block'>
                            <p className="weather__firstblock-like">Feels like:</p>
                            <p className="weather__firstblock-likecels">{feelsLike}°C</p>
                        </div>
                    </div>
                    <div className='weather__firstblock-sunriseblock'>
                        <div className='weather__firstblock-sunblock'>
                            <div className='weather__firstblock-logo'>
                                <img src={sunriseLogo} alt="sunrise" />
                            </div>

                            <p className="weather__firstblock-sunrise">Sunrise <br /> {sunriseAm}</p>
                        </div>

                        <div className='weather__firstblock-sunblock'>
                            <div className='weather__firstblock-logo'>
                                <img src={sunsetLogo} alt="sunrise" />
                            </div>
                            <p className="weather__firstblock-sunset">Sunset <br /> {sunsetAm}</p>
                        </div>

                    </div>
                </div>

                <div className='weather__secondblock'>
                    <div className='weather__secondblock-logo'>
                        <img src={SunnyLogo} alt="sunny" />
                    </div>

                    <p className="weather__secondblock-sunny">{conditionText}</p>
                </div>

                <div className='weather__thirdblock'>

                    <div className='weather__thirdblock-humidity'>
                        <div className='weather__thirdblock-humlogo'>
                            <img src={humidityLogo} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-huminterest">{humidityPercent}% </p>
                        <p className="weather__thirdblock-humtext">Humidity</p>
                    </div>

                    <div className='weather__thirdblock-wind'>
                        <div className='weather__thirdblock-windlogo'>
                            <img src={windLogo} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-windinterest">{windIndexes}km/h</p>
                        <p className="weather__thirdblock-windtext">Wind speed</p>
                    </div>

                    <div className='weather__thirdblock-pressblock'>
                        <div className='weather__thirdblock-presslogo'>
                            <img src={pressureLogo} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-pressinterest">{pressureIndexes}hPa</p>
                        <p className="weather__thirdblock-presstext">Pressure</p>
                    </div>

                    <div className='weather__thirdblock-uv'>
                        <div className='weather__thirdblock-uvlogo'>
                            <img src={uvLogo} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-uvinterest">{uvIndexes}</p>
                        <p className="weather__thirdblock-uvtext">UV</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherIndexes;