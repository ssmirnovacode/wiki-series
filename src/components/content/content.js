import React, {useState, useEffect, useReducer} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';
import nothing from '../../assets/img/nothing.jpg';
//import {connect} from 'react-redux';
//import {loadItems} from '../../redux/actions';
import {getItems} from '../../services/requests';
import useStyles from './styles';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import {reducer, initialState} from '../../redux/reducer';

const Content = (props) => {

    const classes = useStyles();

    const { page, loadItems, home } = props;
    //console.log(items);

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state.query);

    const [appState, setAppstate] = useState({
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
        mounted && getItems(`https://api.tvmaze.com/search/${page}?q=${state.query}`) //url depends on page
        .then(res => {
            if (res.length > 0) {
                //loadItems(res);
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
                //loadItems([]);
            }      
        })
        .catch(() => setAppstate(appState => ({
            ...appState,
            loading: false,
            error: true
        })));
        return () => mounted = false;
    }, [state.query, page, home ]);

    return(
        <>
        <BreadCrumbs home={home} page={page} />
        <main className={classes.container}>
            
            {
                appState.loading ? <Loading /> :
                appState.error ? <Error /> :
                appState.cards.length > 0 ? <Itemlist page={page} items={appState.cards} /> : 
                <>
                <h2 className={classes.title}>Nothing was found for your query...</h2>
                <div className={classes.imgBox}>
                    <img className={classes.img} src={nothing} alt="Nothing found" /> 
                </div>
                </>
            }           
        </main>
        </>
    )
}
  
export default Content;