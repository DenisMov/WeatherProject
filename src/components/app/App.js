import AppHeader from "../appHeader/AppHeader";
import WeatherIndexes from "../weatherIndexes/WeatherIndexes";
import DaysForecast from "../daysForecast/DaysForecast";
import HourlyForecast from "../hourlyForecast/HourlyForecast";


const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <WeatherIndexes/>
                <div className="timetable__content">
                    <DaysForecast/>
                    <HourlyForecast/>
                </div>
            </main>
        </div>
    )
}

export default App;