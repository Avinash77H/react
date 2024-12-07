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
            <div >
            <button onClick={() => dispatch(add_to_cart(item))} className='btn'>ADDTOCART</button>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Whishlist
