import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab } from '@material-ui/core';
import {Link} from 'react-router-dom';
import baseURL from '../../assets/baseURL';

const Navigation = () => {

    const [value, setValue] = React.useState(0);

    const useStyles = makeStyles({
        root: {
            backgroundColor: 'grey'
        },
        tabs: {
            color: 'white'
        }
      });

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Paper square aria-label="navigation" className={classes.root}>
            <Tabs
                value={value}
                TabIndicatorProps={{style: {background:'white'}}}
                onChange={handleChange}
                aria-label="navigation tabs" className={classes.tabs}>
                    <Tab label="Home" component={Link} to={`${baseURL}/`} />
                    <Tab label="Shows" component={Link} to={`${baseURL}/shows`} />
                    <Tab label="People" component={Link} to={`${baseURL}/people`} />
            </Tabs>
        </Paper>
    )
}

export default Navigation;