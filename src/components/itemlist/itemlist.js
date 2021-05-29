import React from 'react';
import ListItem from '../list-item/list-item';
import { makeStyles } from '@material-ui/core/styles';

const Itemlist = ({items, page}) => {

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
        }
      });

    const classes = useStyles();

    const itemsToRender = page === 'cast' && items.length > 9 ? items.slice(0, 10) : items;

    return(
        <section className={classes.root}>
                {
                    itemsToRender.map(item => {
                        const {id,...itemProps} = item;
                        const itemKey = page === 'shows' ? item.show.id : page === 'people' ? item.person.id : Math.random();
                        const char = page === 'cast' ? item.character : null;
                        return(
                            <ListItem key={itemKey} {...itemProps} page={page} character={char} />
                        )
                    })
                }
            </section>
    )
}

export default Itemlist;