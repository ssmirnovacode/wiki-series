import React from 'react';
import './app.scss';
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Content from '../content/content';
import ShowDetails from '../show-details/show-details';
import PersonDetails from '../person-details/person-details';
import Home from '../home/home';

const App = () => {

    return(
        <Router>
            <Header />
            <Navigation />
            <Route path={'/'} exact component={Home} /> 
            <Route path={'/shows'} exact component={() => <Content page='shows' />} /> 
            <Route path={'/people'} exact component={() => <Content page='people' />} />
            {/* <Route path={'/networks'} component={() => <Content page='networks' />} /> */} {/* CORS issue */}
            <Route path={`/shows/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <ShowDetails page='shows' itemId={+id}/>
                    }}/>
            <Route path={`/people/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <PersonDetails page='people' itemId={+id}/> 
                    }}/>
            <Route path={`/characters/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <PersonDetails page='characters' itemId={+id}/> 
                    }}/>
        </Router>
    )
};

export default App;