import React from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import baseURL from '../../assets/baseURL';

const Footer = () => {

   const classes = useStyles();

    return(
        <div className={classes.root}>
            <div >
                <div><Link className={classes.navlinkMain} to={`${baseURL}/`} >WIKI-series</Link></div>
                <ul className={classes.nav}>
                    <li><Link  className={classes.navlink} to={`${baseURL}/shows`} >Shows</Link></li>
                    <li><Link className={classes.navlink} to={`${baseURL}/people`} >People</Link></li>

                </ul>
            </div>
            <div >
                <div className="mb-2">Find us on social media:</div>
                <div>
                    <a className={classes.icons} href={'https://github.com/ssmirnovacode/wiki-series'} target="blank"><i className="fa fa-facebook-square"></i></a>
                    <a className={classes.icons} href={'https://github.com/ssmirnovacode/wiki-series'} target="blank"><i className="fa fa-linkedin-square"></i></a>
                    <a className={classes.icons} href={'https://github.com/ssmirnovacode/wiki-series'} target="blank"><i className="fa fa-github-square"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;