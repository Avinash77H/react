import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function Cart() {
  const CartData = useSelector(state=>state.cart)
  return (
    <div>
      <h1 className='header'>this is Cart page</h1>
      {
          CartData.map(item => {
            return (
              <ul key={item.id} className='bg-gray-500 border-2 '>
                <li>{item.name}</li>
                <li>{item.color}</li>
                <li>{item.price}</li>
              </ul>
            )
          })
        }
    </div>
  )
}

export default Cart
