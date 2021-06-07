import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import Loading from '../loading/loading';
import Error from '../error/error';
import { getItemById } from '../../services/requests';
import ItemCardMain from '../item-card-main/item-card-main';
import CreditItem from '../credit-item/credit-item';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

const PersonDetails = (props) => {

    const classes = useStyles();

    const [itemState, setItemstate] = useState({
        item: null,
        castcredits: [],
        characters: [],
        loading: true,
        error: false
    });

    const endpointUrl = props.page === 'people' ? `https://api.tvmaze.com/${props.page}/${props.itemId}?embed=castcredits` :
            `https://api.tvmaze.com/${props.page}/${props.itemId}`;             

    useEffect( () => {
        let mounted = true;
        mounted && getItemById(endpointUrl)
        .then(res => res && setItemstate({
            item: res,
            castcredits: props.page === 'people'&& res._embedded.castcredits.map(item => item._links.show.href),
            characters: props.page === 'people'&& res._embedded.castcredits.map(item => item._links.character.href),
            loading: false,
            error: false,
        }))
        .catch(() => setItemstate({
            item: null,
            castcredits: [],
            characters: [],
            loading: false,
            error: true
        }));
        return () => mounted = false;
    }, [endpointUrl, props.page]);

    return(
        <>
        <BreadCrumbs home={false} page={props.page} title={itemState.item && itemState.item.name}/>
        {
            itemState.loading ? <Loading /> : itemState.error ? <Error /> : 
                <div className={classes.detailsContainer}>
                    <ItemCardMain className={classes.main} item={itemState.item} />
                    {
                        props.page === 'people'&& <>
                        <div className={classes.shows}>
                            <h2 className={classes.title}>Known for: </h2><br/>
                            <div className={classes.items}>
                                {
                                    itemState.castcredits.map( (item, i) => {
                                        return(
                                            <CreditItem page='shows' index={i} personName={itemState.item.name} key={item+Math.random()} href={item} />
                                        )
                                    }) 
                                }
                            </div>
                        </div>
                        
                        <div className={classes.chars}>
                            <h2 className={classes.title}>Best roles: </h2><br/>
                            <div className={classes.items}>
                                {
                                    itemState.characters.map((item, i) => {
                                        return(
                                                <CreditItem page='characters' personName={itemState.item.name} index={i}  key={item+'char'} href={item} />
                                        )
                                    }) 
                                }
                            </div>
                        </div>     </>
                    }
                    
                    
                    {/* <ItemCardInfo className={classes.info} item={itemState.item} />
                    <ItemCardPreviousEpisodes className={classes.episodes} episodes={itemState.item._embedded.episodes} />
                    <ItemCardCast className={classes.cast} cast={itemState.item._embedded.cast} /> */}
                    
                </div>
        }
        </>
    )
}

export default PersonDetails;
