import styles from './Item.module.scss'
function Item({item,index}) {
  const dispatch = useDispatch()

  return (
    <>
      <div className='row'>
        <div className={'col ' + styles.item}>
          <p>{item.quantity}x {item.itemName} </p>
        </div>
      </div>
    </>
  );
}

export default Item;
