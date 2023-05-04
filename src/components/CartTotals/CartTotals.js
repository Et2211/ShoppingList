import { useEffect, useState } from 'react';
import styles from './CartTotals.module.scss'

function CartTotals({items}) {

  let total = 0

  items.map(item => {
    total+=(item.price * item.quantity)
  })

  return (
    <>
      <h6>Cart Total:</h6>
      <b>£{total.toFixed(2)}</b>
    </>
  );
}

export default CartTotals;
