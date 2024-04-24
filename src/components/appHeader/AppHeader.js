import React, {useState} from 'react';
import './appHeader.scss';

const AppHeader = ({ setCity }) => {
    const [selectedCity, setSelectedCity] = useState('Kyiv'); // Установка 'Kyiv' по умолчанию

    const handleCityClick = (city) => {
        setCity(city);
        setSelectedCity(city);
    };

    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    <li
                        onClick={() => handleCityClick('Kyiv')}
                        className={selectedCity === 'Kyiv' ? 'selected' : ''}
                    >
                        <a>Kyiv</a>
                    </li>
                    <li
                        onClick={() => handleCityClick('Zhashkiv')}
                        className={selectedCity === 'Zhashkiv' ? 'selected' : ''}
                    >
                        <a>Zhashkiv</a>
                    </li>
                    <li
                        onClick={() => handleCityClick('Paris')}
                        className={selectedCity === 'Paris' ? 'selected' : ''}
                    >
                        <a>Paris</a>
                    </li>
                    <li
                        onClick={() => handleCityClick('Washington')}
                        className={selectedCity === 'Washington' ? 'selected' : ''}
                    >
                        <a>Washington</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default AppHeader;