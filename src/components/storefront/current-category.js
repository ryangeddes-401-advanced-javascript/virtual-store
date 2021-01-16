import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import {responsiveFontSizes, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

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

export default function CurrentCat(){
  theme = responsiveFontSizes(theme);
  const category = useSelector ((state) => state.categories.activeCategory)

  return(
    <ThemeProvider theme={theme}>
      <Typography variant="h1">{category}</Typography>
    </ThemeProvider>

  );

};