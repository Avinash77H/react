import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { product_set } from '../../Redux/ProductAction';
import { add_to_cart } from '../../Redux/Actions';
import { add_to_whishlist } from '../../Redux/Actions';
import initialData from "../../Data/Data.json"
import { useState } from 'react';
function Shop() {
  const dispatch = useDispatch()
  
  useState(()=>{
    dispatch(product_set(initialData))
  },[])
  const productData = useSelector(state=>state.product);
 console.log(productData[0].products)

  return (
    <div>
      <h1 className="header">shop</h1>
      <div className='grid grid-cols-3 gap-4 px-4'>
      {
        productData[0].products.map((item)=>{
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
      
      {/* {
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
      } */}
    </div>
  )
}

export default Shop
