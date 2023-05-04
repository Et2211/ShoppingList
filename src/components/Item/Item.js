import { useEffect, useState } from 'react';
import styles from './Item.module.scss'
import { removeItem, checkItem } from '../../redux/itemSlice';
import { useDispatch } from 'react-redux';


function Item({item,index}) {
  const dispatch = useDispatch()

  return (
    <>
      <div className='row'>
        <div className={'col ' + styles.item}>
          <p>{item.quantity}x {item.itemName} </p>
        </div>
        <div className='col'>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value={item.gotIt} id="flexCheckDefault" onChange={()=>{dispatch(checkItem(index))}}/>
            <label class="form-check-label" for="flexCheckDefault">Got It</label>
          </div>
        </div>
        <div className='col'>
          <div onClick={()=>dispatch(removeItem(index))}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
