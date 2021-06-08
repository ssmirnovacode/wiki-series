import React, {useState} from 'react';
import useStyles from './styles';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const SearchForm = (props) => {

    const {setFinalQuery} = props;

    const [query, setQuery] = useState('');

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalQuery(query); 
        //console.log('Submit completed');;
      }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className={classes.root}>
            <TextField id="outlined-search" label="Search for series" 
                type="search" variant="outlined"  aria-describedby="search" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <Button variant="contained" type="submit">Search</Button>
        </form>
    )
};

export default SearchForm;