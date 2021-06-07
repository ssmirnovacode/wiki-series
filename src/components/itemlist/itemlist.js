import React, {useState} from 'react';
import ListItem from '../list-item/list-item';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Itemlist = ({items, page, btn}) => {

    //console.log(items);

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-around'
        },
        btn: {
            marginLeft: '1rem',
            marginTop: '2rem',
        }
      });

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