import React, {useState, useEffect} from 'react';
import Itemlist from '../itemlist/itemlist';
import Loading from '../loading/loading';
import Error from '../error/error';

import {connect} from 'react-redux';
import {loadItems} from '../../redux/actions';
import {getItems} from '../../services/requests';

const Home = () => {

    return(
        <div>Home page</div>
    )
}

export default Home;