import React from 'react';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Content from '../content/content';
import ShowDetails from '../show-details/show-details';
import PersonDetails from '../person-details/person-details';
import Home from '../home/home';
import baseURL from '../../assets/baseURL';

const App = () => {

    const defQuery = 'black';

    return(
        <Router> 
            <Header />
            <Navigation />
            <Route path={`${baseURL}/`} exact component={() => <Home defQuery={defQuery} />} /> 
            <Route path={`${baseURL}/shows`} exact component={() => <Content defQuery={defQuery} page='shows' />} /> 
            <Route path={`${baseURL}/people`} exact component={() => <Content defQuery={defQuery} page='people' />} />
            <Route path={`${baseURL}/shows/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <ShowDetails page='shows' itemId={+id}/>
                    }}/>
            <Route path={`${baseURL}/people/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <PersonDetails page='people' itemId={+id}/> 
                    }}/>
            <Footer />
        </Router>
    )
};

export default App;