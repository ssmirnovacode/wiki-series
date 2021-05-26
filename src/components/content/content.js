import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';

import {connect} from 'react-redux';
import {loadItems} from '../../redux/actions';

const getItems = async (url) => {
    const res = await fetch(url);
    return await res.json();
}

const Content = (props) => {

    const { /* page, */ items, query, loadItems } = props;
    console.log(items);

    const [appState, setAppstate] = useState({
        cards: [],
        loading: false,
        error: false
    });


    useEffect( () => {
        setAppstate(appState => ({
            ...appState,
            loading: true
        }));
 
        getItems(`http://api.tvmaze.com/search/shows?q=${query}`) //url depends on page
        .then(res => {
             if (res.length > 0) {
                loadItems(res);
                setAppstate(appState => ({
                    ...appState,
                    loading: false,
                    cards: res
                }));
                
                //console.log(res);
                //console.log(items);
                console.log('items loaded');
             }
             else {
                setAppstate(appState => ({
                    ...appState,
                    loading: false,
                    cards: []
                }));
                loadItems([]);
             }      
        })
        .catch(() => setAppstate(appState => ({
            ...appState,
            loading: false,
            error: true
        })));
    }, [query, loadItems ]);


    return(
        <main>
            <h1>Series list</h1><br/>
            {
                appState.loading ? <Loading /> :
                appState.error ? <Error /> :
                appState.cards.length > 0 ? <Itemlist series={appState.cards} /> : <div>No series found</div> 
            }
            
        </main>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    query: state.query
  });

  const mapDispatchToProps = {
    loadItems
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Content);