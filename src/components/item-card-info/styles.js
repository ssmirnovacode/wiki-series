import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      margin: '1rem',
      backgroundColor: 'rgba(0,0,0, 0.5)',
      color: 'white',
      gridColumn: '8/12',
      [theme.breakpoints.down('sm')] : {
        gridColumn: '7/12'
      },
      [theme.breakpoints.down('xs')] : {
        gridColumn: '1/12'
      }
    },
    lines: {
        fontSize: '1rem'
    },
    label: {
        fontWeight: 'bold',
        lineHeight: '2rem'
    },
    title: {
        color: 'white'
    },
    flag: {
        height: '1rem'
    }
  }));

  export default useStyles;