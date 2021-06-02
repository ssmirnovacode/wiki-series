import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    detailsContainer: {
      display: 'grid',
    },
    shows: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        borderRadius: '5px',
        padding: '2rem 0',
        color: 'white',
        margin: '1rem' ,
        gridColumn: '1/6',
        [theme.breakpoints.down('xs')] : {
            gridColumn: '1/12'
        }    
    },
    chars: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        borderRadius: '5px',
        padding: '2rem 0',
        color: 'white',
        margin: '1rem' ,
        gridColumn: '6/12',
        [theme.breakpoints.down('xs')] : {
            gridColumn: '1/12'
        }    
    },
    items: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 'normal',
        marginLeft: '3rem'
    }
  }));

  export default useStyles;