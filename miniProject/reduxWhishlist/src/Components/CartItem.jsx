import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

function CartItem({item,itemIndex}) {

  const dispatch = useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("item Removed")
  }
  return (
    <div>

      <div>

        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
        </div>
        <button onClick={removeFromCart}>
          <FcDeleteDatabase/>
        </button>
        
      </div>

    </div>
  )
}

export default CartItem
