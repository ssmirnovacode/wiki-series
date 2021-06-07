import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setQuery} from '../../redux/actions';
import Content from '../content/content';
import { makeStyles } from '@material-ui/core/styles';

const Home = (props) => {

  const {setQuery} = props;

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

    useEffect( () => {
        setQuery('black');
        //console.log('Initial query set');
    }, [setQuery])

    return(
        <section className={classes.container}>
          <h2 className={classes.title}>Trending TV shows</h2>
          <Content home page='shows' />
          <h2 className={classes.title}>Trending actors</h2>
          <Content home page='people' />
        </section>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    query: state.query
  });

  const mapDispatchToProps = {
    setQuery
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);