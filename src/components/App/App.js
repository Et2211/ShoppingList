import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';
import { addItem } from '../../redux/itemSlice';
  const addNewItem = (itemName, quantity) => {
    dispatch(addItem({itemName, quantity}))
  }
  return (
    <div className="App">
      <div className='container'>

        <h1>Shopping List</h1>
        {shoppingList.map((item, index)=>{
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
