import React from 'react';
import ListItem from '../list-item/list-item';
import { makeStyles } from '@material-ui/core/styles';

const Itemlist = ({items, page, roles=null}) => {

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
        }
      });

    //console.log(roles); // ok

    const classes = useStyles();

    //const {items, page} = props;

    const itemsToRender = page === 'cast' && items.length > 9 ? items.slice(0, 10) : items;

    return(
        <section className={classes.root}>
                {
                    itemsToRender.map(item => {
                        const {id,...itemProps} = item;
                        const itemKey = page === 'shows' ? item.show.id : page === 'people' ? item.person.id : Math.random();
                        const itemIndex = itemsToRender.indexOf(item);
                        const char = roles ? roles.filter((role, i) => i === itemIndex)[0] : null;
                        console.log(char); //undefined
                        return(
                            <ListItem key={itemKey} {...itemProps} page={page} character={char} />
                        )
                    })
                }
            </section>
    )
}

export default Itemlist;