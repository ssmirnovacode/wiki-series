import React from 'react';
import './app.scss';
import Header from '../header/header';
import Navigation from '../navigation/navigation';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Content from '../content/content';
import ItemDetails from '../item-details/item-details';

const App = () => {

    return(
        <Router>
            <Header />
            <Navigation />
            <Route path={'/'} exact component={() => <Content page='shows' />} /> 
            <Route path={'/people'} component={() => <Content page='people' />} />
            {/* <Route path={'/networks'} component={() => <Content page='networks' />} /> */} {/* CORS issue */}
            <Route path={`/shows/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <ItemDetails page='shows' itemId={+id}/>
                    }}/>
            <Route path={`/people/:id`} render={ ({match}) => {
                        const {id} = match.params;
                        return <div>Person id {id}</div> 
                    }}/>
        </Router>
    )
};

export default App;