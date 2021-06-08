import React, {useState} from 'react';
import ListItem from '../list-item/list-item';
import useStyles from './styles';
import Button from '@material-ui/core/Button';

const Itemlist = ({items, page, btn}) => {

    const classes = useStyles();

    const [itemsShown, setItemsShown] = useState(9);

    const itemsToRender = page === 'cast' && items.length > itemsShown ? items.slice(0, itemsShown+1) : items;

    const viewMore = () => {
        itemsShown < items.length && setItemsShown(itemsShown => itemsShown + 4);
    }

    return(
        <section>
            <div className={classes.root}>
            {
                itemsToRender.map(item => {
                    const {id,...itemProps} = item;
                    const itemKey = page === 'shows' ? item.show.id : page === 'people' ? item.person.id : Math.random();
                    const char = page === 'cast' ? item.character : null;
                    return(
                        <ListItem key={itemKey} {...itemProps} id={id} page={page} character={char} />
                    )
                })
            }
            </div>
            {
                btn && itemsShown < items.length ? <Button variant="contained" className={classes.btn} onClick={viewMore} >View more</Button> : null
            }
            
        </section>
    )
}

export default Itemlist;