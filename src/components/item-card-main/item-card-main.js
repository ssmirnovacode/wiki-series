import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Star';
import {getCountryCode} from '../../assets/functions/functions';

const ItemCardMain = (props) => {

    const { image, name, rating, summary, country, birthday, gender, deathday} = props.item;

    const classes = useStyles();

    return(
        <Card className={classes.root} >
            <CardActionArea disableRipple className={classes.actionArea}>
                <CardMedia
                className={classes.media}
                image={image ? image.medium : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'}
                title={name} 
                />
                <CardContent  className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {name}  
                    </Typography>
                    {
                        props.page === 'shows' ?
                        <>
                        <Typography className={classes.rating} gutterBottom component="h4">
                            {
                                <><StarsIcon color="action" className={classes.icon} /> 
                                    <div>
                                        {
                                            rating ? rating.average : 'none'
                                        }
                                    </div></> 
                            }    
                        </Typography>
                        <Typography className={classes.descr} variant="body2" color="textSecondary" component="p" 
                            dangerouslySetInnerHTML={{__html: summary ? summary : null}}/>
                        </> :
                        <>
                        <Typography className={classes.descrText}  variant="body2" component="p">
                            {
                                country && getCountryCode(country.code) && <img src={getCountryCode(country.code)} alt='country' className={classes.flag} />
                            }
                             {country && country.name}
                        </Typography>
                        <Typography className={classes.descrText}  variant="body2" component="p">
                            <span className={classes.label}>Born: </span>{birthday? birthday : 'unknown'}
                        </Typography>
                        {       
                            deathday && 
                            <Typography className={classes.descrText}  variant="body2" component="p">
                                <span className={classes.label}>Died: </span>{deathday}
                            </Typography>
                        }
                        
                        <Typography className={classes.descrText}  variant="body2" component="p">
                            <span className={classes.label}>Gender: </span>{gender? gender : 'unknown'}
                        </Typography>

                        <Typography className={classes.descr}  variant="body2" component="p">
                            <span className={classes.label}>Biography: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend augue velit, quis interdum est iaculis eget. Sed sit amet venenatis nisl. Mauris dictum bibendum mollis. Nullam semper nunc eu rhoncus congue. Nullam arcu tellus, tristique ac dui a, laoreet viverra risus. 
                        </Typography>
                        </>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ItemCardMain;