import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const Footer = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: 'grey',
            height: '10rem',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'space-around',
            color: 'white',
            padding: '1rem 0'
        },
        text: {

        },
        nav: {
            listStyleType: 'none',
            marginLeft: '-3rem',
            textAlign: 'left',
            lineHeight: '2rem'
        },
        navlink: {
            textDecoration: 'none',
            color: 'white',
            '&:hover': {
                textDecoration: 'underline'
              }
        },
        navlinkMain: {
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
        icons: {
            color:' white',
            fontSize: '2rem',
            marginRight: '1rem'
        }
      }));
    
      const classes = useStyles();

    return(
        <div className={classes.root}>
            <div >
                <div><Link className={classes.navlinkMain} to={`/`} >WIKI-series</Link></div>
                <ul className={classes.nav}>
                    <li><Link  className={classes.navlink} to={`/shows`} >Shows</Link></li>
                    <li><Link className={classes.navlink} to={`/people`} >People</Link></li>

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