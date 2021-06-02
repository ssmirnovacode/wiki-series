import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    detailsContainer: {
      display: 'grid',
    },
    container: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        borderRadius: '5px',
        padding: '2rem 0',
        color: 'white',
        margin: '1rem'     
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