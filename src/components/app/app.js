import React, {useState, useEffect} from 'react';
import './app.scss';
import Itemlist from '../itemlist/itemlist';
import SearchForm from '../search-form/search-form';

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
        <main>
            <h1>Series list</h1><br/>
            
            <SearchForm setFinalQuery={setFinalQuery} />
            
            <Itemlist series={items} />
        </main>
    )
}

export default App;