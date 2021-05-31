import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {getCountryCode} from '../../assets/functions/functions';

const ItemCardInfo = (props) => {

    const {id, /* image, */ name, genres, status, premiered, /* rating, */ network, language, schedule, runtime} = props.item;

    const useStyles = makeStyles(theme => ({
        root: {
          margin: '1rem',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          color: 'white',
          gridColumn: '8/12',
          [theme.breakpoints.down('sm')] : {
            gridColumn: '7/12'
          },
          [theme.breakpoints.down('xs')] : {
            gridColumn: '1/12'
          }
        },
        lines: {
            fontSize: '1rem'
        },
        label: {
            fontWeight: 'bold',
            lineHeight: '2rem'
        },
        title: {
            color: 'white'
        },
        flag: {
            height: '1rem'
        }
      }));

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
                        network && <img src={getCountryCode(network.country.code)} alt='country' className={classes.flag} />
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