import React from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter((post)=> post.id !== action.payload.postID)
  }
  return newPostList;
};

function PostListProvider({ children }) {
  const addPost = () => {};
  const deletePost = (postID) => {
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postID
      }
    })
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

const DEFAULT_POST_LIST = [
  {
    id:'1',
    title:'going to junagadh',
    body:'Hi, friends, i am goint to junagadh for my vacatios. Hope to enhoy a lot.',
    reactions:2,
    userId:'user-9',
    tags:['vacation','junagadh','enjoying']
  },
  {
    id:'2',
    title:'Paas ho gaya bhai',
    body:'4 saal ki masti k baad bhi ho gaya hain pass, Hard to belive.',
    reactions:7,
    userId:'user-12',
    tags:['Graduating','Unbelievable']
  }
]

export default PostListProvider;
