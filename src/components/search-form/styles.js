import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        gap: '0.3rem',
        margin: '1rem',
        '& input:valid:focus + fieldset': {
            borderColor: 'black',
            borderWidth: 2,
          },
          '& label.Mui-focused': {
            color: 'black',
          },
    }
  });

export default useStyles;