import React, { useReducer } from 'react'
import { createContext } from 'react';

export const ownContext = createContext();



function DataProvider({children}) {

 
  function postReducer(currPostList,action){
    let newPostList = currPostList

    if(action.type === 'delete'){
      newPostList = currPostList.filter((post)=>(
        post.id !== action.payload.id
      ))
    }
    return newPostList
  }

  const deletePost = (id)=>{
    postDispatch({
      type:'delete',
      payload : {
        id
      }
    })
  }

  const[postList,postDispatch] = useReducer(postReducer,initialPost)

  return (
    <ownContext.Provider value={{postList,deletePost}}>
      {children}
    </ownContext.Provider>
  )
}

const initialPost = [
  {
    id:1,
    name:'vidit',
    age : 15
  },
  {
    id:2,
    name:'aary',
    age: 12
  }
]


export default DataProvider
