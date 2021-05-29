import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ItemCardPreviousEpisodes = (prop) => {

    const useStyles = makeStyles(theme => ({
        container: {
            backgroundColor: 'rgba(0,0,0, 0.5)',
            borderRadius: '5px',
            padding: '2rem 0',
            color: 'white',
            margin: '1rem',
            gridColumn: '1/8',
            [theme.breakpoints.down('sm')]  : {
                gridColumn: '1/12'
              }
        },
        
      }));

    const classes = useStyles();

    return(
        <aside className={classes.container}>Prev episodes</aside>
    )
}

export default ItemCardPreviousEpisodes;