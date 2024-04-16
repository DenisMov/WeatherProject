import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';


// const weatherServise = new WeatherService();

// weatherServise.getAllIndexes().then(res => console.log(res.location.name));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

