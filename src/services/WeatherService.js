

class WeatherService {
    getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error('Could not fetch ${url}, status: ${res.status}');
        }

        return res.json();
    }

    getAllIndexes = () => {
        return this.getResource('http://api.weatherapi.com/v1/current.json?key=d4482eb276b541a8a1b161131240804&q=London&aqi=no');
    }
}

export default WeatherService;