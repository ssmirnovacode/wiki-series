import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';

import {connect} from 'react-redux';
import {loadItems} from '../../redux/actions';

const getItems = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const Content = (props) => {

    const { /* page, */ items, query } = props;

    const [appState, setAppstate] = useState({
        items: items,
        loading: false,
        error: false,
        noneFound: false
    });


    useEffect( () => {
        setAppstate(appState => ({
            ...appState,
            loading: true
        }));
        //console.log(query);
        getItems(`http://api.tvmaze.com/search/shows?q=${query}`) //url depends on page
        .then(res => {
             if (res.length > 0) {
                loadItems(res);
                setAppstate(appState => ({
                    ...appState,
                    loading: false,
                    items: res
                }));
                
                //console.log(res);
                console.log(items);
                console.log('items loaded');
             }
             else {
                setAppstate(appState => ({
                    ...appState,
                    loading: false,
                    noneFound: true,
                    items: []
                }));
                loadItems([]);
             }      
        })
        .catch(() => setAppstate(appState => ({
            ...appState,
            loading: false,
            error: true
        })));
    }, [query]);


    return(
        <main>
            <h1>Series list</h1><br/>
            {
                appState.loading ? <Loading /> :
                !appState.noneFound ? <Itemlist series={appState.items} /> : <div>No series found</div>
            }
            
        </main>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    query: state.query
  });

  
export default connect(mapStateToProps)(Content);