import React from 'react';
import './itemlist.scss';
import ListItem from '../list-item/list-item';

const Itemlist = (props) => {

    const {series} = props;

    return(
        <div>
                {
                    series.map(item => {
                        const {id,...itemProps} = item;

                        return(
                            <ListItem key={item.show.id} {...itemProps} />
                        )
                    })
                }
            </div>
    )
}

export default Itemlist;