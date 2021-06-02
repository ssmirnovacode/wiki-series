import React from 'react';
import useStyles from './styles';
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
                <Button variant="outlined" size="small" className={classes.btn} component={Link} to={`/${props.page === 'cast' ? 'people' : props.page}/${id}`}>
                        Learn More
                </Button>

            </CardActions>
            </Card>
    )
}

export default ListItem;