import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from "../redux/slices/CartSlice"

function Product({post}) {
  const{cart} = useSelector((state)=>state)
  const dispatch = useDispatch();

  const addToCart = ()=>{
    dispatch(add(post))
    toast.sucess("Item added to Cart");
  }

  const removeFromCart = ()=>{
    dispatch(remove(post.id))
    toast.sucess('Item removed from Cart')
  }

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {
        cart.some((p)=>p.id == post.id)?<button onClick={removeFromCart}>Remove Item</button>:<button onClick={addToCart}>Add to Cart</button>
      }
    
    </div>
  )
}

export default Product