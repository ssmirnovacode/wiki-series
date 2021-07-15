import React, { useContext } from 'react';
import Loading from '../loading/loading';
import Error from '../error/error';
import ItemCardMain from '../item-card-main/item-card-main';
import ItemCardInfo from '../item-card-info/item-card-info';
import { makeStyles } from '@material-ui/core/styles';
import ItemCardCast from '../item-card-cast/item-card-cast';
import ItemCardPreviousEpisodes from '../item-card-previousEp/item-card-previousEp';
import LastEpisode from '../last-episode/last-episode';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import useShow from '../../hooks/useShow';
import PageContext from '../../context/PageContext';

const ShowDetails = (props) => {

    const useStyles = makeStyles({
        detailsContainer: {
          display: 'grid',
        }
    });

    const pageValue = useContext(PageContext);

    const classes = useStyles();

    const endpointUrl = pageValue === 'shows' ? `https://api.tvmaze.com/shows/${props.itemId}?embed[]=cast&embed[]=episodes` : `https://api.tvmaze.com/${pageValue}/${props.itemId}`;

    const itemState = useShow(endpointUrl);

    const lastEpisode = itemState && itemState.item._embedded && itemState.item._embedded.episodes[itemState.item._embedded.episodes.length-1];

    return(
        <>
        <BreadCrumbs home={false} page={pageValue} title={itemState.item && itemState.item.name}/>
        {
            itemState.loading ? <Loading /> : itemState.error ? <Error /> : 
                <div className={classes.detailsContainer}>
                    <ItemCardMain className={classes.main} page={pageValue} item={itemState.item} />
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