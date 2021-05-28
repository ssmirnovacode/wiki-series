import React, {useState, useEffect} from 'react';

const ItemCardMain = (props) => {

    return(
        <div>{props.item.name}</div>
    )
}

export default ItemCardMain;