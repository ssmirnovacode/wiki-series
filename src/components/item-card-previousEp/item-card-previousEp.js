import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ItemCardPreviousEpisodes = ({episodes}) => {

    const useStyles = makeStyles(theme => ({
        container: {
            backgroundColor: 'rgba(0,0,0, 0.5)',
            borderRadius: '5px',
            padding: '1rem 0',
            color: 'white',
            margin: '1rem',
            gridColumn: '1/8',
            [theme.breakpoints.down('sm')]  : {
                gridColumn: '1/12'
              }
        },
        title: {
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 'normal',
            marginLeft: '1rem'
        }
      }));

    const classes = useStyles();

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

      const episodesToRender = episodes.slice(0,4);

    return(
        <aside className={classes.container}>
            <h2 className={classes.title}>Previous episodes: </h2><hr/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Season/episode</StyledTableCell>
                        <StyledTableCell align="right">Episode title</StyledTableCell>
                        <StyledTableCell align="right">Airdate</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {episodesToRender.map((ep) => (
                        <StyledTableRow key={ep.name}>
                            <StyledTableCell component="th" scope="row">
                                {ep.season} x {ep.number}
                            </StyledTableCell>
                            <StyledTableCell align="right">{ep.name}</StyledTableCell>
                            <StyledTableCell align="right">{ep.airdate}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

        </aside>
    )
}

export default ItemCardPreviousEpisodes;