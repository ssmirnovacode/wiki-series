import React, {useState, useEffect} from 'react';
import './app.scss';
import ListItem from '../list-item/list-item';

const getItems = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const App = () => {

    const [series, setSeries] = useState([]);

    const [query, setQuery] = useState('');

    useEffect( () => {
        getItems(`http://api.tvmaze.com/search/shows?q=${query}`)
        .then(res => {setSeries(res); console.log('Search completed')});
    }, [query]);


    return(
        <main>
            <h1>Series list</h1><br/>
            <input type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)}/>
            
            <div>
                {
                    series.map(item => {
                        const {id,...itemProps} = item;

                        return(
                            <ListItem key={item.show.id} {...itemProps} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default App;