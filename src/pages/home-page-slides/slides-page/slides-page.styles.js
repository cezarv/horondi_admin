import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: `100%`,
    marginTop: 65,
    position: 'static',
    padding: theme.spacing(3)
  },
  slideTitle: {
    marginBottom: theme.spacing(1),
    fontSize: 24,
    color: theme.palette.text.disabled,
    fontWeight: 'bold'
  },
  paginationDiv:{
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  tableNav: {
    margin: theme.spacing(1),
  },
}));
