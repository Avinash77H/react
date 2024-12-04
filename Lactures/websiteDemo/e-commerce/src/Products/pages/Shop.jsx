import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { product_set } from '../../Redux/ProductAction';
import { add_to_cart } from '../../Redux/Actions';
import { add_to_whishlist } from '../../Redux/Actions';

function Shop() {
  const productData = useSelector(state=>state.product);
  

  const dispatch = useDispatch()
  
  const product = [
    {
      id: 1,
      name: 'Mobile',
      color: 'black',
      price: 50000
    },
    {
      id: 2,
      name: 'laptop',
      color: 'black',
      price: 50000
    },
    {
      id: 3,
      name: 'television',
      color: 'black',
      price: 50000
    },
    {
      id:  4,
      name: 'headPhone',
      color: 'black',
      price: 50000
    },
    {
      id: 5,
      name: 'speaker',
      color: 'black',
      price: 50000
    }
  ]

  return (
    <div>
      <h1 className="header">shop</h1>
      <button onClick={() => dispatch(product_set(product))}>Click For Action</button>
      {
        productData.flat().map(item => {
          return (
            <ul key={item.id} className='bg-gray-500 border-2 text-white'>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
              <button className='btn' onClick={() => dispatch(add_to_cart(item))}>ADDTOCART</button>
              <button className='btn' onClick={()=>dispatch(add_to_whishlist(item))} >Add To WhishList</button>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Shop
