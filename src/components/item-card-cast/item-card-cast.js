import React from 'react';
import ItemList from '../itemlist/itemlist';
import useStyles from './styles';

const ItemCardCast = ({cast}) => {

    const classes = useStyles();

    const actors = cast.map(role => role.person);
    const characters = cast.map(role => role.character);

    actors.forEach((actor, i) => actor.character = characters[i]);

    return(
        <section className={classes.container}>
            <h2 className={classes.title}>CAST: </h2><hr/>
            <ItemList btn={actors.length > 9} items={actors} page={'cast'} />
        </section>
        
    )
}

export default ItemCardCast;