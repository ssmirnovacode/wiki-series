import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const SearchForm = (props) => {

    const {setFinalQuery} = props;

    const [query, setQuery] = useState('');

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            gap: '0.3rem',
            margin: '1rem',
            '& input:valid:focus + fieldset': {
                borderColor: 'black',
                borderWidth: 2,
              },
              '& label.Mui-focused': {
                color: 'black',
              },
        }
      });

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalQuery(query); 
        console.log('Submit completed');;
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