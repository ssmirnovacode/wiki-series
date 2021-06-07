import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '1rem 0rem',
        color: 'white',
        backgroundColor: 'rgba(0,0,0, 0.3)',
        padding: '1rem'
     },
     link: {
         color: 'white',
         textDecoration: 'none',
         '&:hover': {
            textDecoration: 'underline'
          }
     },
     destination: {
         fontWeight: 'bold'
     }
  }));

export default useStyles;