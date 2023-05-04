import Item from '../Item/Item';
  return (
    <div className="App">
      <div className='container'>

        <h1>Shopping List</h1>
        {shoppingList.map((item, index)=>{
          return ( 
            <Item item={item} index={index}/>
            )
          })}

      </div>
    </div>
  );
}

export default App;
