import React, {useState, useEffect} from 'react';
import './app.scss';
import Itemlist from '../itemlist/itemlist';
import Header from '../header/header';
import Navigation from '../navigation/navigation';

const getItems = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const App = () => {

    const [appState, setAppstate] = useState({
        items: [],
        loading: true,
        error: false,
        noneFound: false
    });

    const [finalQuery, setFinalQuery] = useState('');

    useEffect( () => {
        getItems(`http://api.tvmaze.com/search/shows?q=${finalQuery}`)
        .then(res => {
            res.length > 0 ? setAppstate(appState => ({
                ...appState,
                items: res,
                loading: false
            })) : setAppstate(appState => ({
                ...appState,
                items: [],
                noneFound: true
            }))        
        })
        .catch(() => setAppstate(appState => ({
            ...appState,
            loading: false,
            error: true
        })));
    }, [finalQuery]);


    return(
        <main className="main">
            <Header  setFinalQuery={setFinalQuery}  />
            <Navigation />
            <h1>Series list</h1><br/>
            {
                appState.items.length > 0 ? <Itemlist series={appState.items} /> : <div>No series found</div>
            }
            
        </main>
    )
}

export default App;