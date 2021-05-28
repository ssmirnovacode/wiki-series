import React from 'react';
import './list-item.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Star';

const ListItem = (props) => {


    const {name, image} = props.page === 'shows' ? props.show : props.person;

    const useStyles = makeStyles({
        root: {
          maxWidth: '18rem',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          color: 'white'
        },
        media: {
          height: '20rem',
          overflow: 'hidden'
        },
        descr: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 5,
            "-webkit-box-orient": "vertical",
            color: 'white'
        },
        rating: {    
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            fontSize: '2rem',
            marginRight: '.7rem',
            color: 'orange'
        }
      });

    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image ? image.medium : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'}
                title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}  
                    </Typography>

                    <Typography className={classes.rating} gutterBottom component="h4">
                        
                        {
                            props.page === 'shows' ? 
                            <>
                            <StarsIcon color="action" className={classes.icon} /> 
                            <div>
                                {
                                    props.show.rating.average ? props.show.rating.average : 'none'
                                }
                            </div></> : props.page === 'people' ?
                            <div>
                            {
                                props.person.country ? props.person.country.name : 'Country unknown'
                            }
                        </div> : null
                        }
                        
                              
                    </Typography>
                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p" 
                        dangerouslySetInnerHTML={{__html: props.show ? props.show.summary : null}}/>
                </CardContent>
            </CardActionArea>
            <CardActions>
{/*                 <Button size="small" color="primary">
                Share
                </Button> */} 
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
    )
}

export default ListItem;