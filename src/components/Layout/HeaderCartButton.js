import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderCartButton.module.css';

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfcartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{numberOfcartItems}</span>
    </button>
  );
};
