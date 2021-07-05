import React from 'react';
import useStyles from './styles';
import Loading from '../loading/loading';
import Error from '../error/error';
import ItemCardMain from '../item-card-main/item-card-main';
import CreditItem from '../credit-item/credit-item';
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import usePerson from '../../hooks/usePerson';

const PersonDetails = (props) => {

    const classes = useStyles();

    const endpointUrl = props.page === 'people' ? `https://api.tvmaze.com/${props.page}/${props.itemId}?embed=castcredits` :
    `https://api.tvmaze.com/${props.page}/${props.itemId}`;    

    const itemState = usePerson(endpointUrl, props.page);

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
                </div>
        }
        </>
    )
}

export default PersonDetails;
