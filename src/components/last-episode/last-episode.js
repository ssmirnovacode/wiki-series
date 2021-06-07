import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const LastEpisode = ({item}) => {

    const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: 'rgba(0,0,0, 0.5)',
            borderRadius: '5px',
            padding: '1rem .5rem',
            margin: '1rem',
            color: 'white',
            gridColumn: '1/8',
            [theme.breakpoints.down('sm')] : {
                gridColumn: '1/7'
            },
            [theme.breakpoints.down('xs')] : {
                gridColumn: '1/12'
            }
        },
        title: {
          [theme.breakpoints.down('xs')] : {
            fontSize: '1rem'
          }
        },
        descr: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 10,
            "-webkit-box-orient": "vertical",
            color: 'white',
            [theme.breakpoints.down('xs')] : {
              fontSize: '.8rem'
            }
        }
      }));

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
                        Air date: {item.airdate}
                    </Typography>   
                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p" 
                        dangerouslySetInnerHTML={{__html: item.summary ? item.summary : null}}/>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default LastEpisode;