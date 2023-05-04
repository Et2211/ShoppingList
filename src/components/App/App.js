import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';
import { items, addItem } from '../../redux/itemSlice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss'
import { slist } from '../../utilities';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()


  console.log(useSelector(state=>state))
  const shoppingList = useSelector(items)




  const addNewItem = (itemName, quantity) => {
    dispatch(addItem({itemName, quantity}))
  }
  useEffect(()=>{
    const list = document.getElementById("shoppingList")
    if (list) slist(list);
  })


  return (
    <div className="App">
      <div className='container'>

        <h1>Shopping List</h1>
        <ul id='shoppingList' className='p-0'>
        {shoppingList && shoppingList.map((item, index)=>{
          return ( 
            <li className={styles.draggableList}>
              <Item item={item} index={index}/>
            </li>
            )
          })}
          </ul>

        <AddItem addItem={addNewItem}/>
      </div>
    </div>
  );
}

export default App;
