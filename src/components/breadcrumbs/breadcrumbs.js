import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';


const BreadCrumbs = ({home, page, title}) => {

    if (home) {
        return null;
    }

  return (
      
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/" >
        Home
      </Link>
      <Link color="inherit" to={`/${page}`}>
      {page}
      </Link>
      <Typography color="textPrimary">{title && title}</Typography>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;