import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import baseURL from '../../assets/baseURL';
import noImage from '../../assets/img/no-image.png';

const ListItem = (props) => {

    const {id, name, image} = props.page === 'shows' ? props.show : props.page === 'people' ? props.person : props;

    const classes = useStyles();

    return(
        <Card className={classes.root} >
            <CardActionArea component={Link} to={`${baseURL}/${props.page === 'cast' ? 'people' : props.page}/${id}`}>
                <CardMedia
                className={classes.media}
                image={image ? image.medium : noImage}
                title={name}
                />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
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

                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p">
                        {
                            props.character ? `as ${props.character.name}` : null
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ListItem;