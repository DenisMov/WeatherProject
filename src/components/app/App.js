import AppHeader from "../appHeader/AppHeader";
import WeatherIndexes from "../weatherIndexes/WeatherIndexes";
import DaysForecast from "../daysForecast/DaysForecast";
import HourlyForecast from "../hourlyForecast/HourlyForecast";
import { useState, useEffect } from "react";


const App = () => {

    const [city, setCity] = useState('Kyiv')
    const [data, setData] = useState({})

    const getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error('Could not fetch ${url}, status: ${res.status}');
        }

        const data = res.json();
        return data
    }

    
    // useEffect(() => {
    //     getResource(`http://api.weatherapi.com/v1/current.json?key=d4482eb276b541a8a1b161131240804&q=${city}&aqi=yes`).then(data => setData(data))
    // }, [])

    useEffect(() => {
        getResource(`http://api.weatherapi.com/v1/current.json?key=d4482eb276b541a8a1b161131240804&q=${city}&aqi=yes`).then(data => setData(data))
    }, [city])

    console.log(data)
    
    const { location: { region, name } = {}, 
            current: {temp_c } = {}} = data 


    return (
        <div className="app">
            <AppHeader setCity={setCity}/>
            <main>
                <WeatherIndexes data={data}/>
                <div className="timetable__content">
                    <DaysForecast data={data}/>
                    <HourlyForecast data={data}/>
                </div>
            </main>
        </div>
    )
}

export default App;