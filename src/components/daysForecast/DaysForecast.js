import { Component } from 'react';
import WeatherService from '../../services/WeatherService';
import './daysForecast.scss';


import clouds1 from '../../resources/img/clouds1.png'
import mist1 from '../../resources/img/mist1.png'
import clear2 from '../../resources/img/clear2.png'
import drizzle1 from '../../resources/img/drizzle1.png'
import rain1 from '../../resources/img/rain1.png'

class DaysForecast extends Component {

    constructor(props) {
        super(props);
        this.updateDays();
    }

    state = {
        weatherLogo: null,
        selsius: null,
        data: null,
    }

    weatherServise = new WeatherService();

    updateDays = () => {
        const id = 'Kyiv';
        this.weatherServise
            .getForecastIndexes(id)
            // .then(res => console.log(res.location.name));
            .then(res => {
                this.setState({
                    weatherLogoOne: res.forecast.forecastday[0].hour[12].condition.icon,
                    selsiusOne: res.forecast.forecastday[0].hour[12].temp_c,
                    dataOne: res.forecast.forecastday[0].hour[12].time.slice(0, 11),

                    weatherLogoTwo: res.forecast.forecastday[1].hour[12].condition.icon,
                    selsiusTwo: res.forecast.forecastday[1].hour[12].temp_c,
                    dataTwo: res.forecast.forecastday[1].hour[12].time.slice(0, 11),

                    weatherLogoTree: res.forecast.forecastday[2].hour[12].condition.icon,
                    selsiusTree: res.forecast.forecastday[2].hour[12].temp_c,
                    dataTree: res.forecast.forecastday[2].hour[12].time.slice(0, 11),

                    weatherLogoThird: res.forecast.forecastday[3].hour[12].condition.icon,
                    selsiusThird: res.forecast.forecastday[3].hour[12].temp_c,
                    dataThird: res.forecast.forecastday[3].hour[12].time.slice(0, 11),

                    weatherLogoFive: res.forecast.forecastday[4].hour[12].condition.icon,
                    selsiusFive: res.forecast.forecastday[4].hour[12].temp_c,
                    dataFive: res.forecast.forecastday[4].hour[12].time.slice(0, 11),
                })
                
            })
    }
    

    render() {
        const {weatherLogoOne, selsiusOne, dataOne, 
                weatherLogoTwo, selsiusTwo, dataTwo,
                weatherLogoTree, selsiusTree, dataTree,
                weatherLogoThird, selsiusThird, dataThird,
                weatherLogoFive, selsiusFive, dataFive} = this.state
        return (
            <div className="timetable__list">
                <p className="timetable__list-text">5 Days Forecast:</p>

                <div className="timetable__firstday">
                    <div className="timetable__firstday-photo"> 
                        <img  src={weatherLogoOne} alt="photo" />
                    </div>
                    <p className="timetable__firstday-celsius">{selsiusOne}°C</p>
                    <p className="timetable__firstday-day">{dataOne}</p>
                </div>

                <div className="timetable__secondday">
                    <div className="timetable__secondday-photo"> 
                        <img  src={weatherLogoTwo} alt="photo" />
                    </div>
                    <p className="timetable__secondday-celsius">{selsiusTwo}°C</p>
                    <p className="timetable__secondday-day">{dataTwo}</p>
                </div>

                <div className="timetable__thirdyday">
                    <div className="timetable__thirdyday-photo"> 
                        <img  src={weatherLogoTree} alt="photo" />
                    </div>
                    <p className="timetable__thirdyday-celsius">{selsiusTree}°C</p>
                    <p className="timetable__thirdyday-day">{dataTree}</p>
                </div>

                <div className="timetable__fourthday">
                    <div className="timetable__fourthday-photo"> 
                        <img  src={weatherLogoThird} alt="photo" />
                    </div>
                    <p className="timetable__fourthday-celsius">{selsiusThird}°C</p>
                    <p className="timetable__fourthday-day">{dataThird}</p>
                </div>
                <div className="timetable__fifthday">
                    <div className="timetable__fifthday-photo"> 
                        <img  src={weatherLogoFive} alt="photo" />
                    </div>
                    <p className="timetable__fifthday-celsius">{selsiusFive}°C</p>
                    <p className="timetable__fifthday-day">{dataFive}</p>
                </div>
                    
                
            </div>
        )
    } 
}

export default DaysForecast;