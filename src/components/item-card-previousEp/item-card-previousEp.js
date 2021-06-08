import React, {useState} from 'react';
import useStyles, {StyledTableCell, StyledTableRow} from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ItemCardPreviousEpisodes = ({episodes}) => {

    const [episodesShown, setEpisodesShown] = useState(4);

    const classes = useStyles();

    const episodesToRender = episodes.slice(-episodesShown).reverse();

    const showMoreEpisodes = () => episodesShown <= episodes.length && setEpisodesShown(episodesShown => episodesShown + 10);

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <section className={classes.container}>
            <h2 className={classes.title}>Previous episodes: </h2><hr/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell className={classes.tableTitles}>Season x Episode </StyledTableCell>
                        {/* <StyledTableCell className={classes.tableTitles}>Episode title</StyledTableCell> */}
                        <StyledTableCell className={classes.tableTitles} >Airdate</StyledTableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {episodesToRender.map((ep) => (
                        <StyledTableRow key={ep.name}>
                           {/*  <StyledTableCell component="th" scope="row">{ep.season} x {ep.number}
                                
                            </StyledTableCell> */}
                            <StyledTableCell >
                                <Accordion expanded={expanded === ep.season + ep.number} onChange={handleChange(ep.season + ep.number)}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id={ep.season + ep.number}
                                    >
                                        <Typography className={classes.heading}>{ep.season} x {ep.number} </Typography>    
                                        <Typography className={classes.secondaryHeading}>{ ep.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className={classes.descr} variant="body2" component="p" 
                                            dangerouslySetInnerHTML={{__html: ep.summary ? ep.summary : null}}/>
                                    </AccordionDetails>
                            </Accordion>
                                </StyledTableCell>
                            <StyledTableCell >{ep.airdate && ep.airdate.split('-').reverse().join('/')}</StyledTableCell>
                            
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