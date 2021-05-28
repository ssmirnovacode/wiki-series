import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import Error from '../error/error';
import { loadItems } from '../../redux/actions';
import { getItemById } from '../../services/requests';

import {connect} from 'react-redux';
import ItemCardMain from '../item-card-main/item-card-main';

const ItemDetails = (props) => {

    const [itemState, setItemstate] = useState({
        item: null,
        loading: true,
        error: false
    });

    useEffect( () => {
        let mounted = true;
        mounted && getItemById(`http://api.tvmaze.com/${props.page}`, props.itemId)
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
    }, []);

    return(
        <>
        <div>Item {props.itemId} page</div>
        {
            itemState.loading ? <Loading /> : itemState.error ? <Error /> : <ItemCardMain item={itemState.item} />
        }
        </>
    )
}

const mapStateToProps = (state) => ({
    items: state.items,
    query: state.query
  });

  const mapDispatchToProps = {
    loadItems
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);