import './hourlyForecast.scss';

import clear2 from '../../resources/img/clear2.png'
import clouds1 from '../../resources/img/clouds1.png'
import navigation1 from '../../resources/img/navigation/navigation1.png'
import navigation2 from '../../resources/img/navigation/navigation2.png'


const HourlyForecast = () => {
    return (
        <div className="timetable__module">
            <div className="timetable__hourly">
                <p className="timetable__hourly-name">Hourly Forecast: </p>
            </div>
            
            <div className="timetable__info"> 
                <div className='timetable__block'>
                    <p className="timetable__block-time">12:00</p>
                    <div className="timetable__block-photo"> 
                        <img  src={clear2} alt="photo" />
                    </div>
                    <p className="timetable__block-celsius">26°C</p>
                    <div className="timetable__block-navigation"> 
                        <img  src={navigation1} alt="photo" />
                    </div>
                    <p className="timetable__block-speed">3km/h</p>
                </div>

                <div className='timetable__block'>
                    <p className="timetable__block-time">15:00</p>
                    <div className="timetable__block-photo"> 
                        <img  src={clear2} alt="photo" />
                    </div>
                    <p className="timetable__block-celsius">27°C</p>
                    <div className="timetable__block-navigation"> 
                        <img  src={navigation1} alt="photo" />
                    </div>
                    <p className="timetable__block-speed">2km/h</p>
                </div>

                <div className='timetable__block'>
                    <p className="timetable__block-time">18:00</p>
                    <div className="timetable__block-photo"> 
                        <img  src={clouds1} alt="photo" />
                    </div>
                    <p className="timetable__block-celsius">27°C</p>
                    <div className="timetable__block-navigation"> 
                        <img  src={navigation1} alt="photo" />
                    </div>
                    <p className="timetable__block-speed">2km/h</p>
                </div>

                <div className='timetable__block'>
                    <p className="timetable__block-time">21:00</p>
                    <div className="timetable__block-photo"> 
                        <img  src={clouds1} alt="photo" />
                    </div>
                    <p className="timetable__block-celsius">25°C</p>
                    <div className="timetable__block-navigation"> 
                        <img  src={navigation1} alt="photo" />
                    </div>
                    <p className="timetable__block-speed">3km/h</p>
                </div>

                <div className='timetable__block'>
                    <p className="timetable__block-time">00:00</p>
                    <div className="timetable__block-photo"> 
                        <img  src={clear2} alt="photo" />
                    </div>
                    <p className="timetable__block-celsius">22°C</p>
                    <div className="timetable__block-navigation"> 
                        <img  src={navigation1} alt="photo" />
                    </div>
                    <p className="timetable__block-speed">3km/h</p>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast;