import Hash from './hash/hash';
import React, { useState, createContext } from 'react';
const BackgroundContext = createContext();
const NavbarContext = createContext();

function App() {
    const [background, setBackground] = useState('blackBG');
    const [active, setActive] = useState(false);
    return (
        <div className="App">
            {/* <Header /> */}
            <Hash />
        </div>
    );
}

export { App, BackgroundContext, NavbarContext };
