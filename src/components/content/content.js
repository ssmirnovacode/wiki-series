import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';
import nothing from '../../assets/img/nothing.jpg';
import {connect} from 'react-redux';
import {loadItems} from '../../redux/actions';
import {getItems} from '../../services/requests';
import { makeStyles } from '@material-ui/core/styles';

const Content = (props) => {

    const useStyles = makeStyles({
        container: {
            padding: '2rem'
        },
        imgBox: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        },
        img: {
            maxWidth: '20rem'
        },
        title: {
            color: 'white',
            textAlign: 'center'
        }
      });

    const classes = useStyles();

    const { page, query, loadItems, home } = props;
    //console.log(items);

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
        mounted && getItems(`http://api.tvmaze.com/search/${page}?q=${query}`) //url depends on page
        .then(res => {
            if (res.length > 0) {
                loadItems(res);
                setAppstate(appState => ({
                    ...appState,
                    loading: false,
                    cards: home ? res.slice(0,5) : res
                }));

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
        return () => mounted = false;
    }, [query, loadItems, page, home ]);


    return(
        <main className={classes.container}>
            {/* <h1>{page} list</h1><br/> */}
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