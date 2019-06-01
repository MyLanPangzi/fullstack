import React from 'react';
import {MainHeader} from "./views/MainHeader";
import MainFooter from "./views/MainFooter";
import './views/index.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <MainHeader/>
            <MainFooter/>
        </div>
    );
}

export default App;
