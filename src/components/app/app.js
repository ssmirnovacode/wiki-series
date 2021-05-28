import React from 'react';
import './app.scss';
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Content from '../content/content';


const App = () => {

    return(
        <Router>
            <Header />
            <Navigation />
            <Route path={'/'} component={() => <Content page='shows' />} />  {/* to be changed for SeriesPage  */}
            
            
        </Router>
    )
};

export default App;