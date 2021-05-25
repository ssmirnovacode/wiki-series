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

    const [items, setItems] = useState([]);

    const [finalQuery, setFinalQuery] = useState('');

    useEffect( () => {
        getItems(`http://api.tvmaze.com/search/shows?q=${finalQuery}`)
        .then(res => {setItems(res); console.log('Search completed')});
    }, [finalQuery]);


    return(
        <main className="main">
            <Header  setFinalQuery={setFinalQuery}  />
            <Navigation />
            <h1>Series list</h1><br/>
            
            <Itemlist series={items} />
        </main>
    )
}

export default App;