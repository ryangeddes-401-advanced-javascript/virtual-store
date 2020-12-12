
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import * as actions from '../../actions'


let theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});



//A <Categories> component
// Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it


export default function Categories(){
  theme = responsiveFontSizes(theme);
  const dispatch = useDispatch();
  const category = useSelector ( (state) => state.categories.category)

  const toggleF = () => {
    dispatch (actions.toggleFood());
    console.log('FOOD TOGGLED:', category)
  }

  const toggleE = () => {
    dispatch (actions.toggleElectronics());
    console.log('ELECTRONICS TOGGLED:', category)
  }




  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5">Responsive h5</Typography>
      <Button onClick={toggleF}>Food</Button> 
      <Button onClick={toggleE}>Electronics</Button> 
    </ThemeProvider>

  )
}



