import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_cart } from '../../Redux/Actions'

function Whishlist() {
  const whistListData = useSelector(state=>state.whishList)
  const dispatch = useDispatch()
  return (
    <div>
      <h1 className="header">Whishlist</h1>

      {
        whistListData.map(item => {
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

export default Whishlist
