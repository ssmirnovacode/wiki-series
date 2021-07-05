import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';
import nothing from '../../assets/img/nothing.jpg';
//import {getItems} from '../../services/requests';
import useStyles from './styles';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import SearchForm from '../search-form/search-form';
import useCards from '../../hooks/useCards';

const Content = (props) => {

    const classes = useStyles();

    const { page, defQuery, home } = props; 

    const [query, setQuery] = useState(defQuery); 

    const endpointUrl = `https://api.tvmaze.com/search/${page}?q=${query}`;

    const appState = useCards(endpointUrl, home);


    return(
        <>
        <BreadCrumbs home={home} page={page} />
        {
            !home && <SearchForm setFinalQuery={setQuery} />
        }
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