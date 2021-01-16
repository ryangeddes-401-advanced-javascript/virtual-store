//A <Footer> component which shows your copyright and contact information
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';

export default function Footer(){

  return(
<BottomNavigation value={'value'} onChange={'handleChange'} className={'classes.root'}>
    &copy; Ryan and Brandon
</BottomNavigation>
  );
}