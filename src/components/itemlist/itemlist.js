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

    const {series} = props;

    return(
        <section className={classes.root}>
                {
                    series.map(item => {
                        const {id,...itemProps} = item;

                        return(
                            <ListItem key={item.show.id} {...itemProps} />
                        )
                    })
                }
            </section>
    )
}

export default Itemlist;