import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { product_set } from '../../Redux/ProductAction';
import { add_to_cart } from '../../Redux/Actions';

function Shop() {
  const productData = useSelector(state=>state.product);
  console.log(productData)

  const dispatch = useDispatch()
  
  const product = {
    id: 1,
    name: 'Mobile',
    color: 'black',
    price: 50000
  }

  return (
    <div>
      <h1 className="header">shop</h1>
      <button onClick={() => dispatch(product_set(product))}>Click For Action</button>
      {
        productData.map(item => {
          return (
            <ul key={item.id} className='bg-gray-500 border-2 '>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
              <button onClick={() => dispatch(add_to_cart(item))}>ADDTOCART</button>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Shop
