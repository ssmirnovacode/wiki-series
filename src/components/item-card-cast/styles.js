import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        borderRadius: '5px',
        padding: '2rem 0',
        color: 'white',
        margin: '1rem',
        gridColumn: '1/8',
        [theme.breakpoints.down('sm')] : {
            gridColumn: '1/7'
        },
        [theme.breakpoints.down('xs')] : {
            gridColumn: '1/12'
        }
    },
    title: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 'normal',
        marginLeft: '3rem'
    }
  }));

  export default useStyles;