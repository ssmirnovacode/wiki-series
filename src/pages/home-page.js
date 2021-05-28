import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';

import {connect} from 'react-redux';
import {loadItems} from '../../redux/actions';

const HomePage = (props) => {

    return(
        <div>Home page</div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    query: state.query
  });

  const mapDispatchToProps = {
    loadItems
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);