import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove_to_cart } from '../../Redux/Actions'

function Cart() {
  const cartData = useSelector(state=>state.cart)
  console.log(cartData)
  const dispatch = useDispatch()
  return (
    <div>
      <h1 className='header'>this is Cart page</h1>
      {
          cartData.map((item,index) => {
            return (
             <div key={item.id}>
               <ul className='bg-gray-500 border-2 text-white'>
                <li>{item.name}</li>
                <li>{item.color}</li>
                <li>{item.price}</li>
               <button className='remove-btn' onClick={() => dispatch(remove_to_cart(item.id))}>remove</button>
              </ul>
              </div>
            )
          })
        }
    </div>
  )
}

export default Cart
