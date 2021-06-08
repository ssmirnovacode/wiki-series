import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'grey',
        height: '10rem',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
        color: 'white',
        padding: '1rem 0'
    },
    text: {

    },
    nav: {
        listStyleType: 'none',
        marginLeft: '-3rem',
        textAlign: 'left',
        lineHeight: '2rem'
    },
    navlink: {
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            textDecoration: 'underline'
          }
    },
    navlinkMain: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    icons: {
        color:' white',
        fontSize: '2rem',
        marginRight: '1rem'
    }
  }));

export default useStyles;