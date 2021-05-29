import React from 'react';
import ItemList from '../itemlist/itemlist';

const ItemCardCast = ({cast}) => {

    const actors = cast.map(role => role.person);
    const characters = cast.map(role => role.character);

    return(
        <ItemList items={actors} roles={characters} page={'cast'} />
    )
}

export default ItemCardCast;