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
      <div>
        {
          cartData.length === 0 ? <div className='text-center mt-12 text-3xl font-bold'>No Products</div>:cartData.map((item,index) => {
            return (
              <div key={item.id} className=' bg-gray-100 w-1/3 flex flex-col items-center py-2 gap-2 mt-4'>
              <div>
                <img src={item.thumbnail} alt="" className='w-full'/>
              </div>
              <div>
                <ul>
                  <li>{item.title}</li>
                  <li>{item.price}</li>
                </ul>
              </div>
              <div className='flex '>
              <button className='remove-btn' onClick={() => dispatch(remove_to_cart(item.id))}>remove</button>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart
