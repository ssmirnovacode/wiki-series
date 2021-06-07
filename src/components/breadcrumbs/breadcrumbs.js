import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BreadCrumbs = ({home, page, title}) => {

    const classes = useStyles();

    if (home) {
        return null;
    }

  return (
      
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} className={classes.container} aria-label="breadcrumb">
      <Link className={classes.link}  to="/" >
        Home
      </Link>
      <Link className={classes.link} to={`/${page}`}>
      {page === 'shows' ? 'Shows' : page === 'people' ? 'People' : null}
      </Link>
      {
          title ?
            <Typography className={classes.destination} >{title}</Typography> :
            null
      }
      
    </Breadcrumbs>
  );
}

export default BreadCrumbs;