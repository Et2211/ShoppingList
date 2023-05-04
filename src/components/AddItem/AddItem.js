import { useEffect, useState } from 'react';
import styles from './Additem.module.scss'

function AddItem({addItem}) {

  const [newItem, setNewItem] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0)
  const [error, setError] = useState(false)

  const addNewItem = (newItem, quantity) => {
    if (newItem && newItem != ''){

      setNewItem('')
      setQuantity(1)
      setPrice(0)
      addItem(newItem, quantity, price)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <div className='row justify-content-start'>
        <div className='col-6 col-md-3'>
          <label htmlFor="addItem">Add Item </label>
          <input type="text" className={"form-control " + styles.form_input} id="addItem" name="addItem" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
        </div>
        <div className='col-6 col-md-3'>
          <label for="quantity"> Quantity</label>
          <input type="number" className={"form-control " + styles.form_input} id="quantity" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min="1" max="100"></input>
        </div>
        <div className='col-6 col-md-3'>
          <label for="quantity"> Price (per Item)</label>
          <input type="number" className={"form-control " + styles.form_input} id="quantity" name="quantity" value={price} onChange={(e)=>setPrice(e.target.value)} min="1" max="100"></input>
        </div>
      </div>

      {error && <h5 className={styles.error}>Please enter an item</h5>}

      <button className='btn btn-primary mt-2' onClick={()=>addNewItem(newItem, quantity)}>Add</button>
    </>
  );
}

export default AddItem;
