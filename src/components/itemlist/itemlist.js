import React from 'react';
import ListItem from '../list-item/list-item';
import { makeStyles } from '@material-ui/core/styles';

const Itemlist = (props) => {

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
        }
      });

    const classes = useStyles();

    const {items, page} = props;

    return(
        <section className={classes.root}>
                {
                    items.map(item => {
                        const {id,...itemProps} = item;
                        const itemKey = page === 'shows' ? item.show.id : item.person.id;
                        return(
                            <ListItem key={itemKey} {...itemProps} page={page} />
                        )
                    })
                }
            </section>
    )
}

export default Itemlist;