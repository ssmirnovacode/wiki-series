import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ItemCardPreviousEpisodes = (prop) => {

    const useStyles = makeStyles({
        container: {
            backgroundColor: 'rgba(0,0,0, 0.5)',
            borderRadius: '5px',
            padding: '2rem 0',
            color: 'white',
            margin: '1rem',
            gridColumn: '1/8',
        },
        
      });

    const classes = useStyles();

    return(
        <aside className={classes.container}>Prev episodes</aside>
    )
}

export default ItemCardPreviousEpisodes;