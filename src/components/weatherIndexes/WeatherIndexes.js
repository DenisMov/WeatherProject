import { useEffect, useState } from 'react';
import './weatherIndexes.scss';

import sunriseLogo from '../../resources/img/Sun/sunrise-white.png'
import sunsetLogo from '../../resources/img/Sun/sunset-white.png'
import SunnyLogo from '../../resources/img/Sun/clearMax.png'
import humidityLogo from '../../resources/img/Sun/humidity.png'
import windLogo from '../../resources/img/Sun/wind.png'
import pressureLogo from '../../resources/img/Sun/pressure-white.png'
import uvLogo from '../../resources/img/Sun/uv-white.png'

const WeatherIndexes = ({data}) => {
           //          name: res.location.name, 
//                 time: res.location.localtime.slice(11), 
//                 day: res.location.localtime.slice(0, 11),
//                 selsius: res.current.temp_c,
//                 feelsLike: res.current.feelslike_c,
//                 sunriseAm: res.forecast.forecastday[0].astro.sunrise,
//                 sunsetAm: res.forecast.forecastday[0].astro.sunset,
//                 condition: res.forecast.forecastday[0].hour[0].condition.icon,
//                 conditionText: res.forecast.forecastday[0].hour[0].condition.text,
//                 humidityPercent: res.current.humidity,
//                 pressureIndexes: res.current.pressure_mb,
//                 windIndexes: res.current.wind_kph,
//                 uvIndexes: res.current.uv
    
    const { location: { name, localtime} = {}, 
            current: { temp_c, feelslike_c } = {}, 
            forecast: { forecastday } = {},
        
        } = data

    return (
        <div className="weather">
            <div className="weather__block">
                <div className="weather__info">
                    <p className="weather__name" >{name}</p>
                    <p className="weather__time">{localtime && localtime.slice(11)}</p>
                    <p className="weather__day">{localtime && localtime.slice(0, 11)}</p>
                </div>
            </div>

            <div className="weather__static">
                <div className='weather__firstblock'>
                    <div>
                        <p className="weather__firstblock-celsius">{temp_c}</p>
                        <div className='weather__firstblock-block'>
                            <p className="weather__firstblock-like">Feels like:</p>
                            <p className="weather__firstblock-likecels">{feelslike_c}°C</p>
                        </div>
                    </div>
                    <div className='weather__firstblock-sunriseblock'>
                        <div className='weather__firstblock-sunblock'>
                            <div className='weather__firstblock-logo'>
                                <img src={sunriseLogo} alt="sunrise" />
                            </div>
                            
                            <p className="weather__firstblock-sunrise">Sunrise <br/> {sunrise && forecastday[0].astro.sunrise}</p>
                        </div>
                        
                        {/* <div className='weather__firstblock-sunblock'>
                            <div className='weather__firstblock-logo'>
                                <img src={sunsetLogo} alt="sunrise" />
                            </div>
                            <p className="weather__firstblock-sunset">Sunset <br/> {forecastday.astro.sunset}</p>
                        </div> */}
                    </div>
                </div>

                {/* <div className='weather__secondblock'>
                    <div className='weather__secondblock-logo'>
                        <img src={conditionLogo} alt="sunny" />
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
                </div> */}
            </div>
        </div>
    )
    
}

export default WeatherIndexes;



//                 
// updateWeather = () => {
//     const id = 'Kyiv';
//     this.weatherServise
//         .getForecastIndexes(id)
//         // .then(res => console.log(res.location.name));
//         .then(res => {
//             this.setState({
//                 name: res.location.name, 
//                 time: res.location.localtime.slice(11), 
//                 day: res.location.localtime.slice(0, 11),
//                 selsius: res.current.temp_c,
//                 feelsLike: res.current.feelslike_c,
//                 sunriseAm: res.forecast.forecastday[0].astro.sunrise,
//                 sunsetAm: res.forecast.forecastday[0].astro.sunset,
//                 condition: res.forecast.forecastday[0].hour[0].condition.icon,
//                 conditionText: res.forecast.forecastday[0].hour[0].condition.text,
//                 humidityPercent: res.current.humidity,
//                 pressureIndexes: res.current.pressure_mb,
//                 windIndexes: res.current.wind_kph,
//                 uvIndexes: res.current.uv
//             })
//         })
// }