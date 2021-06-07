import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        borderRadius: '5px',
        padding: '1rem .5rem',
        margin: '1rem',
        color: 'white',
        gridColumn: '1/8',
        [theme.breakpoints.down('sm')] : {
            gridColumn: '1/7'
        },
        [theme.breakpoints.down('xs')] : {
            gridColumn: '1/12'
        }
    },
    title: {
      [theme.breakpoints.down('xs')] : {
        fontSize: '1rem'
      }
    },
    descr: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 10,
        "-webkit-box-orient": "vertical",
        color: 'white',
        [theme.breakpoints.down('xs')] : {
          fontSize: '.8rem'
        }
    }
  }));

  export default useStyles;