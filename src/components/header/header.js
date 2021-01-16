//A <Header> component which shows the name of your virtual store
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function Header() {

  return(

    <AppBar position="static" display="flex" flexDirection="row">
      <Toolbar>
        <IconButton edge="start" >
          <Typography variant="h2" >
            Our Store
          </Typography>
        </IconButton>
        {/* Button will have ({state.cart.count}) << for example */}
        <Button color="inherit" justifyContent="flex-end">Cart (0)</Button>
      </Toolbar>
    </AppBar>

  );
}

export default Header;