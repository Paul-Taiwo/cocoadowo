import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import HomePage from './pages/homePage/homePage';
import AboutPage from './pages/aboutPage/aboutPage';


import './App.css';

const  App = () => (
    <div className="App">
        <BrowserRouter>
            <NavBar />

            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
