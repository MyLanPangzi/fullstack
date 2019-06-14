import React from 'react';
import {MainHeader} from "./views/MainHeader";
import MainFooter from "./views/MainFooter";
import './views/index.css';
import {RouterIndex} from "./router/RouterIndex";

const App: React.FC = () => {
    return (
        <div className="app">
            <MainHeader/>
            <main className={'main'}>
                <RouterIndex/>
            </main>
            <MainFooter/>
        </div>
    );
}

export default App;
