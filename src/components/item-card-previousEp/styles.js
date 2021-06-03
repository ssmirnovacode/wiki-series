import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    container: {
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
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontWeight: 'normal',
        marginLeft: '1rem'
    },
    tableTitles: {
        fontSize: '1rem'
    },
    btn: {
        //color: 'white',
        marginTop: '1rem'
    }
  }));

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: 'grey',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      //backgroundColor: 'grey',
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default useStyles;
export {StyledTableCell, StyledTableRow};