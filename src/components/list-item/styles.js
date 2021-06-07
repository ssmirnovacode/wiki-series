import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '15rem',
      [theme.breakpoints.down('xs')] : {
        width: '11rem'
      },
      backgroundColor: 'rgba(0,0,0, 0.5)',
      color: 'white'
    },
    title: {
      [theme.breakpoints.down('xs')] : {
        fontSize: '1rem'
      }
    },
    media: {
      height: '20rem',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    descr: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 5,
        "-webkit-box-orient": "vertical",
        color: 'white',
        [theme.breakpoints.down('xs')] : {
          fontSize: '.8rem'
        }
    },
    rating: {    
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        fontSize: '2rem',
        marginRight: '.7rem',
        color: 'orange',
        [theme.breakpoints.down('xs')] : {
          fontSize: '1.3rem'
        }
    },
    btn: {
        //color: 'white'
    }
  }));

  export default useStyles;