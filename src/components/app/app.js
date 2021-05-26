import React, {useState, useEffect} from 'react';
import './app.scss';
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Content from '../content/content'

const App = () => {

    const [finalQuery, setFinalQuery] = useState('');

    return(
        <Router>
            <Header  setFinalQuery={setFinalQuery}  />
            <Navigation />
            <Route path={'/'} component={() => <Content  finalQuery={finalQuery} />} />  {/* to be changed for SeriesPage  */}
            
            
        </Router>
    )
}

export default App;