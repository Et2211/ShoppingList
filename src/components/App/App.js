import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';
import { items, addItem } from '../../redux/itemSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss'
import { slist } from '../../utilities';
import { useEffect } from 'react';
import CartTotals from '../CartTotals/CartTotals';

function App() {

  const dispatch = useDispatch()


  console.log(useSelector(state=>state))
  const shoppingList = useSelector(items)

  const addNewItem = (itemName, quantity, price) => {
    dispatch(addItem({itemName, quantity, price, gotIt: false}))
  }
  useEffect(()=>{
    const list = document.getElementById("shoppingList")
    if (list) slist(list);
  })
  let total = 0

  shoppingList.map(item => {
    total+=(item.price * item.quantity)
  })

  return (
    <div className="App">
      <div className='container'>

        <h1 className='my-4'>Shopping List</h1>
        <ul id='shoppingList' className='p-0'>
        {shoppingList && shoppingList.map((item, index)=>{
          return ( 
            <li className={"my-2 " + styles.draggableList}>
              <Item item={item} index={index}/>
            </li>
            )
          })}
          </ul>

        <div className='row'>
          <div className='col-12 col-md-6 my-3'>
            <AddItem addItem={addNewItem} total={total}/>
          </div>
          <div className='col-12 col-md-6 my-3'>
            <CartTotals total={total}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
