import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';

import {connect} from 'react-redux';
import {setQuery} from '../../redux/actions';
import {getItems} from '../../services/requests';
import Content from '../content/content';

const Home = (props) => {

    useEffect( () => {
        props.setQuery('black');
    }, [])

    return(
        <section>
        <Content home page='shows' />
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