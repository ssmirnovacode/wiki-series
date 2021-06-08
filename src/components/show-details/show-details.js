import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import Error from '../error/error';
import { getItemById } from '../../services/requests';

import ItemCardMain from '../item-card-main/item-card-main';
import ItemCardInfo from '../item-card-info/item-card-info';

import { makeStyles } from '@material-ui/core/styles';
import ItemCardCast from '../item-card-cast/item-card-cast';
import ItemCardPreviousEpisodes from '../item-card-previousEp/item-card-previousEp';
import LastEpisode from '../last-episode/last-episode';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

const ShowDetails = (props) => {

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

    const endpointUrl = props.page === 'shows' ? `https://api.tvmaze.com/shows/${props.itemId}?embed[]=cast&embed[]=episodes` : `https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/${props.page}/${props.itemId}`;

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
        return () => mounted = false;
    }, [endpointUrl]);

    const lastEpisode = itemState.item && itemState.item._embedded.episodes[itemState.item._embedded.episodes.length-1];

    return(
        <>
        <BreadCrumbs home={false} page={props.page} title={itemState.item && itemState.item.name}/>
        {
            itemState.loading ? <Loading /> : itemState.error ? <Error /> : 
                <div className={classes.detailsContainer}>
                    <ItemCardMain className={classes.main} page={props.page} item={itemState.item} />
                    <ItemCardInfo className={classes.info} item={itemState.item} />
                    <LastEpisode item={lastEpisode} />
                    <ItemCardPreviousEpisodes className={classes.episodes} episodes={itemState.item._embedded.episodes} />
                    <ItemCardCast className={classes.cast} cast={itemState.item._embedded.cast} />
                    
                </div>
        }
        </>
    )
}

export default ShowDetails;