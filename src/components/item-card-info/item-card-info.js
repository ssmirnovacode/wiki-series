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
            fontWeight: 'bold',
            lineHeight: '2rem'
        },
        title: {
            color: 'white'
        }
      });

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
            value: schedule.time + ' | ' + schedule.days.join(', ')
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