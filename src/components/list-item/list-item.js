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
import { Link } from 'react-router-dom';

const ListItem = (props) => {


    const {id, name, image} = props.page === 'shows' ? props.show : props.page === 'people' ? props.person : props;

    //console.log(id);
    const useStyles = makeStyles({
        root: {
          width: '15rem',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          color: 'white'
        },
        media: {
          height: '20rem',
          overflow: 'hidden',
          cursor: 'pointer'
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
        },
        btn: {
            color: 'white'
        }
      });

    const classes = useStyles();

    return(
        <Card className={classes.root} >
            <CardActionArea component={Link} to={`/${props.page === 'cast' ? 'people' : props.page}/${id}`}>
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
                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p">
                        {
                            props.character ? `as ${props.character.name}` : null
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
{/*                 <Button size="small" color="primary">
                Share
                </Button> */} 
                <Button variant="outlined" size="small" className={classes.btn} component={Link} to={`/${props.page === 'cast' ? 'people' : props.page}/${id}`}>
                Learn More
                </Button>
            </CardActions>
            </Card>
    )
}

export default ListItem;