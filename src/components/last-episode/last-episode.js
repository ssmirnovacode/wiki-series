import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const LastEpisode = ({item}) => {

    const classes = useStyles();

    return(
        <Card className={classes.root} >
            <CardActionArea disableRipple>
                
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        Last episode:  
                    </Typography><hr/>
                    <Typography className={classes.title} gutterBottom variant="h6" component="p">
                        {item.name}  
                    </Typography>
                    <Typography className={classes.descr} gutterBottom component="p">
                        Season {item.season}, episode {item.number}
                    </Typography>
                    <Typography className={classes.descr} gutterBottom component="p">
                        Air date: {item.airdate && item.airdate.split('-').reverse().join('/')}
                    </Typography>   
                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p" 
                        dangerouslySetInnerHTML={{__html: item.summary ? item.summary : null}}/>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default LastEpisode;