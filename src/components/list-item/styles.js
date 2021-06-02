import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '15rem',
      backgroundColor: 'rgba(0,0,0, 0.5)',
      color: 'white'
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
        color: 'white'
    },
    rating: {    
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        fontSize: '2rem',
        marginRight: '.7rem',
        color: 'orange'
    },
    btn: {
        color: 'white'
    }
  });

  export default useStyles;