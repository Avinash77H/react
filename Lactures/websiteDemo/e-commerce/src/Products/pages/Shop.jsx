import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { product_set } from '../../Redux/ProductAction';
import { add_to_cart } from '../../Redux/Actions';
import { add_to_whishlist } from '../../Redux/Actions';
import axios from "axios"

function Shop() {
  const dispatch = useDispatch()
  const productData = useSelector(state=>state.product);
  const cartData = useSelector(state => state.whishList);
  const WhishListData = useSelector(state => state.cart)
 
  
  useEffect(()=>{
    async function getData(){

      const response = await axios.get("https://dummyjson.com/products");
      const initialData = await response.data.products
      
      dispatch(product_set(initialData))
    }
    getData()
  },[])

  return (
    <div>
      <h1 className="header">shop</h1>
      <div className='grid grid-cols-3 gap-4 px-4'>
      {
        productData.flat().map((item)=>{
          return (
            <div key={item.id} className=' bg-gray-100   flex flex-col items-center py-2 gap-2'>
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
              <button className='btn' onClick={() => dispatch(add_to_cart(item))}>ADDTOCART</button>
              <button className='btn' onClick={()=>dispatch(add_to_whishlist(item))} >Add To WhishList</button>
              </div>
            </div>
          )
        })
      }
      </div>
      
     
    </div>
  )
}

export default Shop
