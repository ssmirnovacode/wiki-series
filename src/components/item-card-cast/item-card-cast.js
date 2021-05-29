import React from 'react';
import ItemList from '../itemlist/itemlist';
import { makeStyles } from '@material-ui/core/styles';
//import theme from '../../theme';

const ItemCardCast = ({cast}) => {

    const useStyles = makeStyles(theme => ({
        container: {
            backgroundColor: 'rgba(0,0,0, 0.5)',
            borderRadius: '5px',
            padding: '2rem 0',
            color: 'white',
            margin: '1rem',
            gridColumn: '1/8',
            [theme.breakpoints.down('sm')] : {
                gridColumn: '1/7'
            },
            [theme.breakpoints.down('xs')] : {
                gridColumn: '1/12'
            }
        },
        title: {
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 'normal',
            marginLeft: '3rem'
        }
      }));

    const classes = useStyles();

    const actors = cast.map(role => role.person);
    const characters = cast.map(role => role.character);

    actors.forEach((actor, i) => actor.character = characters[i]);

    return(
        <section className={classes.container}>
            <h2 className={classes.title}>CAST: </h2><hr/>
            <ItemList items={actors} page={'cast'} />
        </section>
        
    )
}

export default ItemCardCast;