import {useState, useEffect} from 'react';
import {getItemById} from '../services/requests';

const useShow = (endpointUrl) => {

    const [itemState, setItemstate] = useState({
        item: {},
        loading: true,
        error: false
    });

    useEffect( () => {
        let mounted = true;
        mounted && getItemById(endpointUrl)
        .then(res => {
            if (res) {
                setItemstate({
                    item: res,
                    loading: false,
                    error: false
                })
            }
            else {
                setItemstate({
                    error: true,
                    loading: false,
                    item: {}
                });
            }    
        } )
        .catch(() => setItemstate({
            item: {},
            loading: false,
            error: true
        }));
        return () => mounted = false;
    }, [endpointUrl]);

    //console.log(res);
    return itemState;
}

export default useShow;