import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//import StarsIcon from '@material-ui/icons/Star';

const ItemCardInfo = (props) => {

    const {id, image, name, genres, status, premiered, rating, network, language, schedule, runtime} = props.item;

    const useStyles = makeStyles({
        root: {
          margin: '1rem',
          //maxWidth: '30vw',   /* ---------- dont forget to delete it when other blocks enabled in ItemDetails------------- */
          backgroundColor: 'rgba(0,0,0, 0.5)',
          color: 'white'
        },
        lines: {
            fontSize: '1rem'
        },
        label: {
            fontWeight: 'bold'
        },
        title: {
            color: 'white'
        }
      });

    const classes = useStyles();

    const lines = [
        {
            label: 'Network',
            value: network.name
        },
        {
            label: 'Language',
            value: language
        },
        {
            label: 'Schedule',
            value: schedule.time + '' + schedule.days[0]
        },
        {
            label: 'Status',
            value: status
        },
        {
            label: 'Premiered',
            value: premiered
        },
        {
            label: 'Genres',
            value: 'genres | genres | genres' /* it is an Array, handle apart */
        },
        {
            label: 'Episode duration',
            value: runtime
        }
    ]
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title} color="textSecondary">
                    {name}
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