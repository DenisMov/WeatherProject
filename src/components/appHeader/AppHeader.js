import React, {useState} from 'react';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    {/* Для каждого города добавляем обработчик клика */}
                    <li><a href="#1" >Kiev</a></li>
                    <li><a href="#2" >Zhashkiv</a></li>
                    <li><a href="#3" >Paris</a></li>
                    <li><a href="#4" >Washington</a></li>
                </ul>
            </nav>
        </header>
    );
};


export default AppHeader;