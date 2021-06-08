import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      marginTop: '2rem'
    },
    title: {
        color: 'white',
        textAlign: 'left',
        textIndent: '4rem',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: '1rem',
        fontSize: '1.8rem'
    }
  }));

export default useStyles;