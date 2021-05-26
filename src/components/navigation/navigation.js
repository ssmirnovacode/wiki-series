import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab } from '@material-ui/core';

const Navigation = () => {

    const [value, setValue] = React.useState(2);

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
                aria-label="navigation tabs" className={classes.tabs}
            >
                <Tab label="Series" />
                <Tab label="People" />
                <Tab label="Networks" />
            </Tabs>
        </Paper>
    )
}

export default Navigation;