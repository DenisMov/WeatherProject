import './daysForecast.scss';


import clouds1 from '../../resources/img/clouds1.png'
import mist1 from '../../resources/img/mist1.png'
import clear2 from '../../resources/img/clear2.png'
import drizzle1 from '../../resources/img/drizzle1.png'
import rain1 from '../../resources/img/rain1.png'

const DaysForecast = () => {
    return (
        <div className="timetable__list">
            <p className="timetable__list-text">5 Days Forecast:</p>

            <div className="timetable__firstday">
                <div className="timetable__firstday-photo"> 
                    <img  src={clouds1} alt="photo" />
                </div>
                <p className="timetable__firstday-celsius">20°C</p>
                <p className="timetable__firstday-day">Friday, 1 Sep</p>
            </div>

            <div className="timetable__secondday">
                <div className="timetable__secondday-photo"> 
                    <img  src={mist1} alt="photo" />
                </div>
                <p className="timetable__secondday-celsius">22°C</p>
                <p className="timetable__secondday-day">Saturday, 2 Sep</p>
            </div>

            <div className="timetable__thirdyday">
                <div className="timetable__thirdyday-photo"> 
                    <img  src={clear2} alt="photo" />
                </div>
                <p className="timetable__thirdyday-celsius">27°C</p>
                <p className="timetable__thirdyday-day">Sunday, 3 Sep</p>
            </div>

            <div className="timetable__fourthday">
                <div className="timetable__fourthday-photo"> 
                    <img  src={drizzle1} alt="photo" />
                </div>
                <p className="timetable__fourthday-celsius">27°C</p>
                <p className="timetable__fourthday-day">Monday, 4 Sep</p>
            </div>
            <div className="timetable__fifthday">
                <div className="timetable__fifthday-photo"> 
                    <img  src={rain1} alt="photo" />
                </div>
                <p className="timetable__fifthday-celsius">27°C</p>
                <p className="timetable__fifthday-day">Tuesday, 5 Sep</p>
            </div>
                
            
        </div>
    )
}

export default DaysForecast;