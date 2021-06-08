import React, {useState, useReducer, useContext} from 'react';
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

    const [query, setQuery] = useState('black');

    return(
        <Router> 
            <Header setQuery={setQuery} />
            <Navigation />
            <Route path={`${baseURL}/`} exact component={() => <Home query={query} />} /> 
            <Route path={`${baseURL}/shows`} exact component={() => <Content query={query} page='shows' />} /> 
            <Route path={`${baseURL}/people`} exact component={() => <Content query={query} page='people' />} />
            {/* <Route path={'/networks'} component={() => <Content page='networks' />} /> */} {/* CORS issue */}
            <Route path={`${baseURL}/shows/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <ShowDetails page='shows' itemId={+id}/>
                    }}/>
            <Route path={`${baseURL}/people/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <PersonDetails page='people' itemId={+id}/> 
                    }}/>
            <Route path={`${baseURL}/characters/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <PersonDetails page='characters' itemId={+id}/> 
                    }}/>
            <Footer />
        </Router>
    )
};

export default App;