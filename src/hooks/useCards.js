import React, {useState, useEffect} from 'react';
import {getItems} from '../../services/requests';


const useCards = (page, query, home) => {

    //const [query, setQuery] = useState(defQuery); //input

    const [appState, setAppstate] = useState({ //output - appState
        cards: [],
        loading: false,
        error: false
    });

    useEffect( () => {
        let mounted = true;
        mounted && setAppstate(appState => ({
            ...appState,
            loading: true
        }));
        mounted && getItems(`https://api.tvmaze.com/search/${page}?q=${query}`) //url depends on page
        .then(res => {
            if (res.length > 0) {
                setAppstate(appState => ({
                    ...appState,
                    loading: false,
                    cards: home ? res.slice(0,6) : res
                }));
            }
            else {
                setAppstate(appState => ({
                    ...appState,
                    loading: false,
                    cards: []
                }));
            }      
        })
        .catch(() => setAppstate(appState => ({
            ...appState,
            loading: false,
            error: true
        })));
        return () => mounted = false;
    }, [query, page, home ]);
}

export default useCards;