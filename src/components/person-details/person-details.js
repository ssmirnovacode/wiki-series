import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import Error from '../error/error';
import { loadItems } from '../../redux/actions';
import { getItemById } from '../../services/requests';

import {connect} from 'react-redux';
import ItemCardMain from '../item-card-main/item-card-main';
import ItemCardInfo from '../item-card-info/item-card-info';
//import classes from '*.module.css';

import { makeStyles } from '@material-ui/core/styles';

const PersonDetails = (props) => {

    const useStyles = makeStyles({
        detailsContainer: {
          display: 'grid',
        }
      });

    const classes = useStyles();

    const [itemState, setItemstate] = useState({
        item: null,
        loading: true,
        error: false
    });

    const endpointUrl = props.page === 'shows' ? `http://api.tvmaze.com/shows/${props.itemId}?embed[]=cast&embed[]=episodes` : `http://api.tvmaze.com/${props.page}/${props.itemId}`;

    useEffect( () => {
        let mounted = true;
        mounted && getItemById(endpointUrl)
        .then(res => res && setItemstate({
            item: res,
            loading: false,
            error: false
        }))
        .catch(() => setItemstate({
            item: null,
            loading: false,
            error: true
        }));
        console.log(itemState.item);
        return () => mounted = false;
    }, [endpointUrl]);

    return(
        <div>Person</div>
    )
}

