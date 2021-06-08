import React, {useEffect, useReducer} from 'react';
//import {connect} from 'react-redux';
//import {setQuery} from '../../redux/actions';
import Content from '../content/content';
import { makeStyles } from '@material-ui/core/styles';
import {reducer, initialState} from '../../redux/reducer';

const Home = (props) => {

  //const {setQuery} = props;
  //const [state, dispatch] = useReducer(reducer, initialState);

  const useStyles = makeStyles(theme => ({
    container: {
      marginTop: '2rem'
    },
    title: {
        color: 'white',
        textAlign: 'left',
        textIndent: '4rem',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1rem',
        fontSize: '1.8rem'
    }
  }));

  const classes = useStyles();

    /* useEffect( () => {
        dispatch({type: 'SET_QUERY', payload: 'black'});
        console.log(state.query);
    }, []) */

    return(
        <section className={classes.container}>
          <h2 className={classes.title}>Trending TV shows</h2>
          <Content home query={props.query} page='shows' />
          <h2 className={classes.title}>Trending actors</h2>
          <Content home query={props.query} page='people' />
        </section>
    )
}
  
export default Home;