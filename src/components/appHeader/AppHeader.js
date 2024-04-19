import React, {useState} from 'react';
import './appHeader.scss';

const AppHeader = ({setCity}) => {
    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    <li onClick={() => setCity('Zhashkiv')}>Kiev</li>
                    <li onClick={() => setCity('Zhashkiv')}>Zhashkiv</li>
                    <li onClick={() => setCity('Paris')} >Paris</li>
                    {/* <li><a  >Washington</a></li> */}
                </ul>
            </nav>
        </header>
    );
};


export default AppHeader;