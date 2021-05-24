import React, {useState, useEffect} from 'react';
import './app.scss';

const App = () => {

    const [series, setSeries] = useState([]);

    const getItems = async () => {
        const res = await fetch('http://api.tvmaze.com/search/shows?q=24');
        return await res.json();
    }

    useEffect( () => {
        getItems()
        .then(res => setSeries(res));
    }, []);

    return(
        <main>
            <h1>Series list</h1>
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