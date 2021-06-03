import React, {useState, useEffect} from 'react';
import Loading from '../loading/loading';
import Error from '../error/error';
import { getItemById } from '../../services/requests';
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
import baseURL from '../../assets/baseURL';

const CreditItem = (props) => { 

    const [itemState, setItemState] = useState({
        item: null,
        error: false,
        loading: true
    });

    const urlWithHttps = 'https' + props.href.slice(5);

    const endpointUrl = props.page === 'characters' ? `${urlWithHttps}` :
            `${urlWithHttps}?embed=cast`; 
    //console.log(endpointUrl);

    useEffect( () => {
        let mounted = true;
        mounted && getItemById(endpointUrl)
        .then(res => res && setItemState({
            item: res,
            error: false,
            loading: false
        }))
        .catch( () => setItemState({
            item: null,
            error: true,
            loading: false
        }));
        return () => mounted = false;
    }, [endpointUrl])

    const useStyles = makeStyles({
        root: {
          width: '18rem',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          color: 'white'
        },
        media: {
          height: '20rem',
          overflow: 'hidden',
          cursor: props.page === 'characters' && 'auto'
        },
        descr: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 3,
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

    if (itemState.loading) {
        return <Loading />
    }

    if (itemState.error) {
        return <Error />
    }

    return(
        <Card className={classes.root} >
            <CardActionArea disableRipple={props.page === 'characters' ? true : false} component={props.page === 'shows' ? Link : CardMedia} to={`${baseURL}/${props.page === 'cast' ? 'people' : props.page}/${itemState.item.id}`}>
                <CardMedia
                className={classes.media}
                image={itemState.item.image ? itemState.item.image.medium : 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'}
                title={itemState.item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {itemState.item.name}  
                    </Typography>

                    {
                        props.page === 'shows' &&
                        <>
                        <Typography className={classes.rating} gutterBottom component="h4">
                            <StarsIcon color="action" className={classes.icon} /> 
                            <div>
                                {
                                    itemState.item.rating ? itemState.item.rating.average : 'none'
                                }
                            </div>
                                
                        </Typography>  
                        <Typography className={classes.rating} gutterBottom component="h4">
                        
                            <div>
                                as {itemState.item && itemState.item._embedded && itemState.item._embedded.cast.find(el => el.person.name === props.personName).character.name}
                            </div>
                            
                        </Typography> 
                        </> 
                        
                    }
                        
                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p" 
                        dangerouslySetInnerHTML={{__html: itemState.item.summary ? itemState.item.summary : null}}/>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    props.page !== 'characters' && 
                        <Button variant="outlined" size="small" className={classes.btn}  component={Link} to={`${baseURL}/${props.page === 'cast' ? 'people' : props.page}/${itemState.item.id}`}>
                            Learn More
                        </Button>
                }
                
            </CardActions>
        </Card>
    )
}

export default CreditItem;