import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {getCountryCode} from '../../assets/functions/functions';

const ItemCardInfo = (props) => {

    const {id, name, genres, status, premiered, network, language, schedule, runtime} = props.item;

    const classes = useStyles();

    const lines = [
        {
            label: 'Network',
            value: network ? network.name : 'unknown'
        },
        {
            label: 'Language',
            value: language || 'unknown'
        },
        {
            label: 'Schedule',
            value: schedule && schedule.time + ' | ' + schedule.days.join(', ')
        },
        {
            label: 'Status',
            value: status || 'unknown'
        },
        {
            label: 'Premiered',
            value: premiered || 'unknown'
        },
        {
            label: 'Genres',
            value: genres.join(' | ') || 'unknown'
        },
        {
            label: 'Episode duration',
            value: runtime || 'unknown'
        }
    ];

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title} color="textSecondary">
                    {name} {
                        network && getCountryCode(network.country.code) && <img src={getCountryCode(network.country.code)} alt={network.country.code} className={classes.flag} />
                    }
                </Typography>
                {
                    lines.map(line => {
                        return(
                            <Typography className={classes.lines} key={id + line.label} variant="body2" component="p">
                                <span className={classes.label}>{line.label}: </span>{line.value}
                            </Typography>
                        )
                    })
                }
                
            </CardContent>       
        </Card>
    )
}

export default ItemCardInfo;