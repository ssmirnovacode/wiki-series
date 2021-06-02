import React, {useState} from 'react';
import useStyles, {StyledTableCell, StyledTableRow} from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const ItemCardPreviousEpisodes = ({episodes}) => {

    const [episodesShown, setEpisodesShown] = useState(4);

    const classes = useStyles();

    const episodesToRender = episodes.slice(-episodesShown).reverse();

    const showMoreEpisodes = () => episodesShown <= episodes.length && setEpisodesShown(episodesShown => episodesShown + 10);

    return(
        <section className={classes.container}>
            <h2 className={classes.title}>Previous episodes: </h2><hr/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell className={classes.tableTitles}>Seas./ep.</StyledTableCell>
                        <StyledTableCell className={classes.tableTitles}>Episode title</StyledTableCell>
                        <StyledTableCell className={classes.tableTitles} >Airdate</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {episodesToRender.map((ep) => (
                        <StyledTableRow key={ep.name}>
                            <StyledTableCell component="th" scope="row">
                                {ep.season} x {ep.number}
                            </StyledTableCell>
                            <StyledTableCell >{ep.name}</StyledTableCell>
                            <StyledTableCell >{ep.airdate}</StyledTableCell>
                            
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                episodesShown < episodes.length ?  <Button className={classes.btn} variant="contained" onClick={showMoreEpisodes}>View more</Button> : 
                <Button className={classes.btn} variant="contained" onClick={() => setEpisodesShown(4)}>View less</Button>
            }
           
        </section>
    )
}

export default ItemCardPreviousEpisodes;