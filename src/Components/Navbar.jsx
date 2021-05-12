import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: "white",
    "&:hover": {
      textDecoration: "none",
      color: "white",
      fontStyle: "italic"
    },
    textDecoration: "none"
  },

}))

function Navbar() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.text} component={Link} to="/blogs" variant="h5" >
          // Flatiron Blogs
        </Typography>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar