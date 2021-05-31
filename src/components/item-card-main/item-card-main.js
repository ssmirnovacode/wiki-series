import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarsIcon from '@material-ui/icons/Star';
import {getCountryCode} from '../../assets/functions/functions';

const ItemCardMain = (props) => {

    const { image, name, rating, summary, country, birthday, gender, _embedded} = props.item;

    const useStyles = makeStyles(theme => ({
        root: {
          margin: '1rem',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          color: 'white',
          gridColumn: '1/8',
          [theme.breakpoints.down('sm')] : {
            gridColumn: '1/7'
          },
          [theme.breakpoints.down('xs')] : {
            gridColumn: '1/12'
          }
        },
        actionArea: {
          display: 'grid',
          gridTemplateColumns: '1fr 3fr'
        },
        media: {
          height: '20rem',
          overflow: 'hidden',
          cursor: 'pointer',
        },
        cardContent: {
            display: 'grid'
        },
        title: {
            gridColumn: '1/10'
        },
        descr: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 12,
            "-webkit-box-orient": "vertical",
            color: 'white',
            gridColumn: '1/12'
        },
        rating: {    
            display: 'flex',
            alignItems: 'center',
            gridColumn: '11/12'
        },
        icon: {
            fontSize: '2rem',
            marginRight: '.7rem',
            color: 'orange'
        },
        genres: {
            display: 'flex',
            gap: '1rem'
        },
        genre: {
            display: 'inline-block',
            padding: '0.3rem',
            border: '1px solid grey',
            borderRadius: '5px',
            backgroundColor: 'grey',
            gridColumn: '1/12'
        }
      }));

    const classes = useStyles();

    return(
        <Card className={classes.root} >
            <CardActionArea className={classes.actionArea}>
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
                        <Typography className={classes.descr}  variant="body2" component="p">
                            {
                                country && <img src={getCountryCode(country.code)} alt='country' className={classes.flag} />
                            }
                            {country && country.name}
                        </Typography>
                        <Typography className={classes.descr}  variant="body2" component="p">
                            Birthday: {birthday? birthday : 'unknown'}
                        </Typography>
                        <Typography className={classes.descr}  variant="body2" component="p">
                            Gender: {gender? gender : 'unknown'}
                        </Typography>
                        <Typography className={classes.descr}  variant="body2" component="p">
                            Shows: 
                        </Typography>
                        </>
                    }

                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default ItemCardMain;