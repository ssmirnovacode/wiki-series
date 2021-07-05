import {useState, useEffect} from 'react';
import {getItemById} from '../services/requests';

const usePerson = (endpointUrl, page) => {
    const [itemState, setItemstate] = useState({
        item: null,
        castcredits: [],
        characters: [],
        loading: true,
        error: false
    });

    useEffect( () => {
        let mounted = true;
        mounted && getItemById(endpointUrl)
        .then(res => res && setItemstate({
            item: res,
            castcredits: page === 'people'&& res._embedded.castcredits.map(item => item._links.show.href),
            characters: page === 'people'&& res._embedded.castcredits.map(item => item._links.character.href),
            loading: false,
            error: false,
        }))
        .catch(() => setItemstate({
            item: null,
            castcredits: [],
            characters: [],
            loading: false,
            error: true
        }));
        return () => mounted = false;
    }, [endpointUrl, page]);

    return itemState;
}

export default usePerson;