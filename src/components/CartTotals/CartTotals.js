import { useEffect, useState } from 'react';
import styles from './CartTotals.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { budget, setBudget } from '../../redux/budgetSlice';

function CartTotals({items, total}) {

  const dispatch= useDispatch()
  const [newBudget, setNewBudget] = useState(0)
  const budget = useSelector(state=>state.budget.value)
  

  const saveNewBudget = () => {
    dispatch(setBudget(newBudget))
    setNewBudget(0)
  }

  return (
    <>
      <div className='row'>
        <div className='col'>
          <h6>Cart Total:</h6>
          <b>£{total.toFixed(2)}</b>
        </div>

        <div className='col'>
          <h6>Budget</h6>
          <b>£{budget}</b>
        </div>
        <div className='col-6 col-md-3'>
          <label for="quantity"> Set new budget</label>
          <input type="number" className={"form-control " + styles.form_input} id="quantity" name="quantity" value={newBudget} onChange={(e)=>setNewBudget(e.target.value)} min="1" max="100"></input>
          <button className='btn btn-primary mt-2' onClick={()=>saveNewBudget()}>Set new budget</button>
        </div>

      </div>
    </>
  );
}

export default CartTotals;
