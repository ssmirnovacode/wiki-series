import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '2rem',
        [theme.breakpoints.down('xs')] : {
            padding: '1rem'
          },
    },
    imgBox: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    img: {
        maxWidth: '20rem'
    },
    title: {
        color: 'white',
        textAlign: 'center'
    }
  }));

export default useStyles;