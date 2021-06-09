import React from 'react';
import useStyles from './styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const SearchForm = (props) => {

    const {setFinalQuery} = props;

    const [endpoint, setEndpoint] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalQuery(endpoint);
    }

    const classes = useStyles();

    return(
        <div className={classes.search}>
              <div className={classes.searchIcon}>
                  <SearchIcon />
              </div>
              <form onSubmit={(e) => handleSubmit(e)} className={classes.root}>
                  <InputBase
                      placeholder="Search…"
                      classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                      value={endpoint} onChange={(e) => setEndpoint(e.target.value)}
                  />
              </form>
          </div>
    )
};

export default SearchForm;