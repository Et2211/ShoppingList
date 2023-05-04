import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';
import { items, addItem } from '../../redux/itemSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()


  console.log(useSelector(state=>state))
  const shoppingList = useSelector(items)


  const addNewItem = (itemName, quantity) => {
    dispatch(addItem({itemName, quantity}))
  }

  return (
    <div className="App">
      <div className='container'>

        <h1>Shopping List</h1>
        {shoppingList && shoppingList.map((item, index)=>{
          return ( 
            <Item item={item} index={index}/>
            )
          })}

        <AddItem addItem={addNewItem}/>
      </div>
    </div>
  );
}

export default App;
