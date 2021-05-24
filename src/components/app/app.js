import React, {useState, useEffect} from 'react';
import './app.scss';

const App = () => {

    const [series, setSeries] = useState([]);

    const [query, setQuery] = useState('');

    const getItems = async (url) => {
        const res = await fetch(url);
        return await res.json();
    }

    useEffect( () => {
        getItems(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(res => {setSeries(res); console.log('Search completed')});
    }, [query]);

    return(
        <main>
            <h1>Series list</h1><br/>
            <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <ul>
                {
                    series.map(item => {
                        return(
                            <li key={item.show.id}>{item.show.name}</li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default App;