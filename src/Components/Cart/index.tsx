import React, { useState } from 'react';
import CartPanel from './CartInfo';
import {  SwipeableDrawer } from '@mui/material';
import CartButton from '../Buttons/CartButton';

function MyCart() {
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer2 = (anchor: string, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <CartButton onClick={toggleDrawer2('right', true)}/>
      {state && 
    <React.Fragment>
      <SwipeableDrawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer2('right', false)}
        onOpen={toggleDrawer2('right', true)}
        PaperProps={{
          sx: {
            width: '75%',
          },
        }}
        >
        <CartPanel closeForm={toggleDrawer2(`right`, false)}/>
      </SwipeableDrawer>
    </React.Fragment>
}
        </>
  );
}

export default MyCart;
