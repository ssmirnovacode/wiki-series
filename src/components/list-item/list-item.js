import React, {useState, useEffect} from 'react';
import './list-item.scss';

const ListItem = (props) => {

    const {id, name, language, genres, image, rating, summary} = props.show;

    //const descr = summary.slice(3,-3);

    return(
        <article>
            <h2>{name}</h2>
            <img alt={name} src={image.medium} />
            <ul>
                {
                    genres.map(gen => <li key={gen+id}>{gen}</li>)
                }
            </ul>
        </article>
    )
}

export default ListItem;