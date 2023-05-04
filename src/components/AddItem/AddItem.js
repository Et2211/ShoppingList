import { useEffect, useState } from 'react';
import styles from './Additem.module.scss'

function AddItem({addItem}) {

  const [newItem, setNewItem] = useState('')
  const [quantity, setQuantity] = useState(0)

  const addNewItem = (newItem, quantity) => {
    setNewItem('')
    setQuantity(0)
    addItem(newItem, quantity)
  }

  return (
    <>
      <div className='row justify-content-start'>
        <div className='col-3'>
          <label htmlFor="addItem">Add Item </label>
          <input type="text" className={"form-control " + styles.form_input} id="addItem" name="addItem" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
        </div>
        <div className='col-3'>
          <label for="quantity"> Quantity</label>
          <input type="number" className={"form-control " + styles.form_input} id="quantity" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min="1" max="100"></input>
        </div>
      </div>

      <button className='btn btn-primary mt-2' onClick={()=>addNewItem(newItem, quantity)}>Add</button>
    </>
  );
}

export default AddItem;
