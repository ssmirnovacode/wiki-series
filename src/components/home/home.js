import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setQuery} from '../../redux/actions';
import Content from '../content/content';
import useStyles from './styles';

const Home = (props) => {

  const {setQuery} = props;

  const classes = useStyles();

    useEffect( () => {
        setQuery('black');
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
    /* items: state.items,
    query: state.query */
  });

  const mapDispatchToProps = {
    setQuery
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);