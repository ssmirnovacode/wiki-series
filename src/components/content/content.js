import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';

const getItems = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const Content = (props) => {

    const { /* page, */ finalQuery } = props;

    const [appState, setAppstate] = useState({
        items: [],
        loading: false,
        error: false,
        noneFound: false
    });

    //const [finalQuery, setFinalQuery] = useState('');

    useEffect( () => {
        setAppstate(appState => ({
            ...appState,
            loading: true
        }));
        getItems(`http://api.tvmaze.com/search/shows?q=${finalQuery}`) //url depends on page
        .then(res => {
            res.length > 0 ? setAppstate(appState => ({
                ...appState,
                items: res,
                loading: false
            })) : setAppstate(appState => ({
                ...appState,
                items: [],
                loading: false,
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
        <main>
            <h1>Series list</h1><br/>
            {
                appState.loading ? <Loading /> :
                !appState.noneFound? <Itemlist series={appState.items} /> : <div>No series found</div>
            }
            
        </main>
    )
}

export default Content;