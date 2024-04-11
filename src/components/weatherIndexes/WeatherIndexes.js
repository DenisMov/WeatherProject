import './weatherIndexes.scss';

import sunrise from '../../resources/img/Sun/sunrise-white.png'
import sunset from '../../resources/img/Sun/sunset-white.png'
import Sunny from '../../resources/img/Sun/clearMax.png'
import humidity from '../../resources/img/Sun/humidity.png'
import wind from '../../resources/img/Sun/wind.png'
import pressure from '../../resources/img/Sun/pressure-white.png'
import uv from '../../resources/img/Sun/uv-white.png'

const WeatherIndexes = () => {
    return (
        <div className="weather">
            <div className="weather__block">
                <div className="weather__info">
                    <p className="weather__city">Athens</p>
                    <p className="weather__time">09:03</p>
                    <p className="weather__day">Thursday, 31 Aug</p>
                    <p className="weather__descr">

                    </p>
                </div>
            </div>

            <div className="weather__static">
                <div className='weather__firstblock'>
                    <div>
                        <p className="weather__firstblock-celsius">24°C</p>
                        <div className='weather__firstblock-block'>
                            <p className="weather__firstblock-like">Feels like:</p>
                            <p className="weather__firstblock-likecels">22°C</p>
                        </div>
                    </div>
                    <div className='weather__firstblock-sunriseblock'>
                        <div className='weather__firstblock-sunblock'>
                            <div className='weather__firstblock-logo'>
                                <img src={sunrise} alt="sunrise" />
                            </div>
                            
                            <p className="weather__firstblock-sunrise">Sunrise <br/> 06:37 AM</p>
                        </div>
                        
                        <div className='weather__firstblock-sunblock'>
                            <div className='weather__firstblock-logo'>
                                <img src={sunset} alt="sunrise" />
                            </div>
                            <p className="weather__firstblock-sunset">Sunset <br/> 20:37 AM</p>
                        </div>
                        
                    </div>
                </div>

                <div className='weather__secondblock'>
                    <div className='weather__secondblock-logo'>
                        <img src={Sunny} alt="sunny" />
                    </div>
                        
                    <p className="weather__secondblock-sunny">Sunny</p>
                </div>

                <div className='weather__thirdblock'>

                    <div className='weather__thirdblock-humidity'>
                        <div className='weather__thirdblock-humlogo'>
                            <img src={humidity} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-huminterest">41% </p>
                        <p className="weather__thirdblock-humtext">Humidity</p>
                    </div>
                    
                    <div className='weather__thirdblock-wind'>
                        <div className='weather__thirdblock-windlogo'>
                            <img src={wind} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-windinterest">2km/h</p>
                        <p className="weather__thirdblock-windtext">Wind speed</p>
                    </div>

                    <div className='weather__thirdblock-pressblock'>
                        <div className='weather__thirdblock-presslogo'>
                            <img src={pressure} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-pressinterest">997hPa</p>
                        <p className="weather__thirdblock-presstext">Pressure</p>
                    </div>
                    
                    <div className='weather__thirdblock-uv'>
                        <div className='weather__thirdblock-uvlogo'>
                            <img src={uv} alt="photo" />
                        </div>
                        <p className="weather__thirdblock-uvinterest">8</p>
                        <p className="weather__thirdblock-uvtext">UV</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherIndexes;