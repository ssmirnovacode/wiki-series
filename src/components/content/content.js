import React, {useState, useContext} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';
import nothing from '../../assets/img/nothing.jpg';
import useStyles from './styles';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import SearchForm from '../search-form/search-form';
import useCards from '../../hooks/useCards';
import PageContext from '../../context/PageContext';

const Content = (props) => {

    const classes = useStyles();

    const { defQuery, home } = props; 

    const [query, setQuery] = useState(defQuery); 

    const pageValue = useContext(PageContext);

    const endpointUrl = `https://api.tvmaze.com/search/${pageValue}?q=${query}`;

    const appState = useCards(endpointUrl, home);

    return(
        <>
        <BreadCrumbs home={home} page={pageValue} />
        {
            !home && <SearchForm setFinalQuery={setQuery} />
        }
        <main className={classes.container}>
            
            {
                appState.loading ? <Loading /> :
                appState.error ? <Error /> :
                appState.cards.length > 0 ? <Itemlist page={pageValue} items={appState.cards} /> : 
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