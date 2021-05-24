import React, {useState, useEffect} from 'react';
import './list-item.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ListItem = (props) => {

    const {id, name, language, genres, image, rating, summary} = props.show;

    const useStyles = makeStyles({
        root: {
          maxWidth: 345
        },
        media: {
          height: 340,
          overflow: 'hidden'
        },
      });

    const classes = useStyles();

    //const descr = summary.slice(3,-3);

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={image.medium}
                title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {summary}
                    </Typography>
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