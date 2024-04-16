import { Component } from 'react';
import WeatherService from '../../services/WeatherService';
import './hourlyForecast.scss';

import clear2 from '../../resources/img/clear2.png'
import clouds1 from '../../resources/img/clouds1.png'
import navigation1 from '../../resources/img/navigation/navigation1.png'
import navigation2 from '../../resources/img/navigation/navigation2.png'


class HourlyForecast extends Component {

    constructor(props) {
        super(props);
        this.updateForecast();
    }

    state = {
        time12: null, 
        weatherLogo: null,
        selsius: null,
        navigationLogo: null,
        speed: null,
    }

    weatherServise = new WeatherService();

    updateForecast = () => {
        const id = 'Kyiv';
        this.weatherServise
            .getForecastIndexes(id)
            // .then(res => console.log(res.location.name));
            // .then(res => console.log(res.forecast.forecastday.date));
            .then(res => {
                this.setState({
                    time12: res.forecast.forecastday[0].hour[12].time.slice(11), 
                    weatherLogo12: res.forecast.forecastday[0].hour[12].condition.icon,
                    selsius12: res.forecast.forecastday[0].hour[12].temp_c,
                    navigationLogo: null,
                    speed12: res.forecast.forecastday[0].hour[12].wind_kph,


                    time15: res.forecast.forecastday[0].hour[15].time.slice(11), 
                    weatherLogo15: res.forecast.forecastday[0].hour[15].condition.icon,
                    selsius15: res.forecast.forecastday[0].hour[15].temp_c,
                    speed15: res.forecast.forecastday[0].hour[15].wind_kph,

                    time18: res.forecast.forecastday[0].hour[18].time.slice(11), 
                    weatherLogo18: res.forecast.forecastday[0].hour[18].condition.icon,
                    selsius18: res.forecast.forecastday[0].hour[18].temp_c,
                    speed18: res.forecast.forecastday[0].hour[18].wind_kph,

                    time21: res.forecast.forecastday[0].hour[21].time.slice(11), 
                    weatherLogo21: res.forecast.forecastday[0].hour[21].condition.icon,
                    selsius21: res.forecast.forecastday[0].hour[21].temp_c,
                    speed21: res.forecast.forecastday[0].hour[21].wind_kph,

                    time00: res.forecast.forecastday[0].hour[0].time.slice(11), 
                    weatherLogo00: res.forecast.forecastday[0].hour[0].condition.icon,
                    selsius00: res.forecast.forecastday[0].hour[0].temp_c,
                    speed00: res.forecast.forecastday[0].hour[0].wind_kph,
                })
                
            })
    }

    render() {
        const { time12, time15, time18, time21, time00, weatherLogo12, weatherLogo15, weatherLogo18 , weatherLogo21, weatherLogo00, selsius12, selsius15, selsius18, selsius21, selsius00, navigationLogo, speed12, speed15, speed18, speed21, speed00} = this.state;
        return (
            <div className="timetable__module">
                <div className="timetable__hourly">
                    <p className="timetable__hourly-name">Hourly Forecast: </p>
                </div>
                
                <div className="timetable__info"> 
                    <div className='timetable__block'>
                        <p className="timetable__block-time">{time12}</p>
                        <div className="timetable__block-photo"> 
                            <img  src={weatherLogo12} alt="photo" />
                        </div>
                        <p className="timetable__block-celsius">{selsius12}°C</p>
                        <div className="timetable__block-navigation"> 
                            <img  src={navigation1} alt="photo" />
                        </div>
                        <p className="timetable__block-speed">{speed12}km/h</p>
                    </div>
    
                    <div className='timetable__block'>
                        <p className="timetable__block-time">{time15}</p>
                        <div className="timetable__block-photo"> 
                            <img  src={weatherLogo15} alt="photo" />
                        </div>
                        <p className="timetable__block-celsius">{selsius15}°C</p>
                        <div className="timetable__block-navigation"> 
                            <img  src={navigation1} alt="photo" />
                        </div>
                        <p className="timetable__block-speed">{speed15}km/h</p>
                    </div>
    
                    <div className='timetable__block'>
                        <p className="timetable__block-time">{time18}</p>
                        <div className="timetable__block-photo"> 
                            <img  src={weatherLogo18} alt="photo" />
                        </div>
                        <p className="timetable__block-celsius">{selsius18}°C</p>
                        <div className="timetable__block-navigation"> 
                            <img  src={navigation1} alt="photo" />
                        </div>
                        <p className="timetable__block-speed">{speed18}km/h</p>
                    </div>
    
                    <div className='timetable__block'>
                        <p className="timetable__block-time">{time21}</p>
                        <div className="timetable__block-photo"> 
                            <img  src={weatherLogo21} alt="photo" />
                        </div>
                        <p className="timetable__block-celsius">{selsius21}°C</p>
                        <div className="timetable__block-navigation"> 
                            <img  src={navigation1} alt="photo" />
                        </div>
                        <p className="timetable__block-speed">{speed21}km/h</p>
                    </div>
    
                    <div className='timetable__block'>
                        <p className="timetable__block-time">{time00}</p>
                        <div className="timetable__block-photo"> 
                            <img  src={weatherLogo00} alt="photo" />
                        </div>
                        <p className="timetable__block-celsius">{selsius00}°C</p>
                        <div className="timetable__block-navigation"> 
                            <img  src={navigation1} alt="photo" />
                        </div>
                        <p className="timetable__block-speed">{speed00}km/h</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HourlyForecast;