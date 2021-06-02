import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        root: {
          margin: '1rem',
          backgroundColor: 'rgba(0,0,0, 0.5)',
          color: 'white',
          gridColumn: '1/8',
          [theme.breakpoints.down('sm')] : {
            gridColumn: '1/7'
          },
          [theme.breakpoints.down('xs')] : {
            gridColumn: '1/12'
          }
        },
        actionArea: {
          display: 'grid',
          gridTemplateColumns: '1fr 3fr'
        },
        media: {
          height: '20rem',
          overflow: 'hidden',
          cursor: 'pointer',
        },
        cardContent: {
            display: 'grid'
        },
        title: {
            gridColumn: '1/10'
        },
        descr: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 12,
            "-webkit-box-orient": "vertical",
            color: 'white',
            gridColumn: '1/12',
            lineHeight: '1.2rem'
        },
        rating: {    
            display: 'flex',
            alignItems: 'center',
            gridColumn: '11/12'
        },
        icon: {
            fontSize: '2rem',
            marginRight: '.7rem',
            color: 'orange'
        },
        genres: {
            display: 'flex',
            gap: '1rem'
        },
        genre: {
            display: 'inline-block',
            padding: '0.3rem',
            border: '1px solid grey',
            borderRadius: '5px',
            backgroundColor: 'grey',
            gridColumn: '1/12'
        },
        label: {
            fontWeight: 'bold'
        },
        descrText: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 12,
            "-webkit-box-orient": "vertical",
            color: 'white',
            gridColumn: '1/12',
            lineHeight: '2rem'
        }
      }));

export default useStyles;