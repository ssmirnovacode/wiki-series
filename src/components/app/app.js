import React, {useState, useEffect} from 'react';
import './app.scss';
import Itemlist from '../itemlist/itemlist';

const getItems = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const App = () => {

    const [items, setItems] = useState([]);

    const [query, setQuery] = useState('');

    useEffect( () => {
        getItems(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(res => {setItems(res); console.log('Search completed')});
    }, [query]);


    return(
        <main>
            <h1>Series list</h1><br/>
            <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)}/>
            
            <Itemlist series={items} />
        </main>
    )
}

export default App;