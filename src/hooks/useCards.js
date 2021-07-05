import {useState, useEffect} from 'react';
import {getItems} from '../services/requests';

const useCards = (endpointUrl, home=false) => {

    const [appState, setAppstate] = useState({ 
        cards: [],
        loading: true,
        error: false
    });

    useEffect( () => {
        let mounted = true;
        mounted && getItems(endpointUrl) 
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
    }, [home, endpointUrl]);

    return  appState;
}

export default useCards;