import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        [theme.breakpoints.down('xs')] : {
            gap: '.5rem'
          },
        justifyContent: 'space-around'
    },
    btn: {
        marginLeft: '1rem',
        marginTop: '2rem',
    }
  }));

export default useStyles;