

class WeatherService {
    _apiBase = 'http://api.weatherapi.com/v1/'
    _apiKey = 'key=d4482eb276b541a8a1b161131240804&'

    getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error('Could not fetch ${url}, status: ${res.status}');
        }

        return res.json();
    }


    getAllIndexes = (id) => {
        return this.getResource(`${this._apiBase}current.json?${this._apiKey}&q=${id}&aqi=no`);
    }

    getForecastIndexes = (id) => {
        return this.getResource(`${this._apiBase}forecast.json?${this._apiKey}&q=${id}&days=7&aqi=no&alerts=no`);
    }
}

export default WeatherService;