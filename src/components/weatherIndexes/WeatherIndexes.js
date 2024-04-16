import { Component } from 'react';
import WeatherService from '../../services/WeatherService';
import './weatherIndexes.scss';

import sunrise from '../../resources/img/Sun/sunrise-white.png'
import sunset from '../../resources/img/Sun/sunset-white.png'
import Sunny from '../../resources/img/Sun/clearMax.png'
import humidity from '../../resources/img/Sun/humidity.png'
import wind from '../../resources/img/Sun/wind.png'
import pressure from '../../resources/img/Sun/pressure-white.png'
import uv from '../../resources/img/Sun/uv-white.png'

class WeatherIndexes extends Component {
    constructor(props) {
        super(props);
        this.updateWeather();
    }

    state = {
        name: null, 
        time: null, 
        day: null,
        selsius: null,
        sunriseAm: null,
    }

    weatherServise = new WeatherService();

    updateWeather = () => {
        const id = 'Kyiv';
        this.weatherServise
            .getForecastIndexes(id)
            // .then(res => console.log(res.location.name));
            .then(res => {
                this.setState({
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
                })
                
            })
    }

    render () {
        const { name, time, day, selsius, feelsLike, sunriseAm, sunsetAm, condition, 
                conditionText, humidityPercent, pressureIndexes, windIndexes, uvIndexes } = this.state;

        
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
                                    <img src={sunrise} alt="sunrise" />
                                </div>
                                
                                <p className="weather__firstblock-sunrise">Sunrise <br/> {sunriseAm}</p>
                            </div>
                            
                            <div className='weather__firstblock-sunblock'>
                                <div className='weather__firstblock-logo'>
                                    <img src={sunset} alt="sunrise" />
                                </div>
                                <p className="weather__firstblock-sunset">Sunset <br/> {sunsetAm}</p>
                            </div>
                            
                        </div>
                    </div>
    
                    <div className='weather__secondblock'>
                        <div className='weather__secondblock-logo'>
                            <img src={condition} alt="sunny" />
                        </div>
                            
                        <p className="weather__secondblock-sunny">{conditionText}</p>
                    </div>
    
                    <div className='weather__thirdblock'>
    
                        <div className='weather__thirdblock-humidity'>
                            <div className='weather__thirdblock-humlogo'>
                                <img src={humidity} alt="photo" />
                            </div>
                            <p className="weather__thirdblock-huminterest">{humidityPercent}% </p>
                            <p className="weather__thirdblock-humtext">Humidity</p>
                        </div>
                        
                        <div className='weather__thirdblock-wind'>
                            <div className='weather__thirdblock-windlogo'>
                                <img src={wind} alt="photo" />
                            </div>
                            <p className="weather__thirdblock-windinterest">{windIndexes}km/h</p>
                            <p className="weather__thirdblock-windtext">Wind speed</p>
                        </div>
    
                        <div className='weather__thirdblock-pressblock'>
                            <div className='weather__thirdblock-presslogo'>
                                <img src={pressure} alt="photo" />
                            </div>
                            <p className="weather__thirdblock-pressinterest">{pressureIndexes}hPa</p>
                            <p className="weather__thirdblock-presstext">Pressure</p>
                        </div>
                        
                        <div className='weather__thirdblock-uv'>
                            <div className='weather__thirdblock-uvlogo'>
                                <img src={uv} alt="photo" />
                            </div>
                            <p className="weather__thirdblock-uvinterest">{uvIndexes}</p>
                            <p className="weather__thirdblock-uvtext">UV</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
    
}

export default WeatherIndexes;