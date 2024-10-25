import React from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts:()=>{},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if(action.type === 'ADD_INITIAl_POSTS'){
    newPostList = action.payload.posts
  }
  return newPostList;
};

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts)=>{
    dispatchPostList({
      type : 'ADD_INITIAl_POSTS',
      payload:{
        posts
      }
    })
  }

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };


  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "going to junagadh",
//     body: "Hi, friends, i am goint to junagadh for my vacatios. Hope to enhoy a lot.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "junagadh", "enjoying"],
//   },
//   {
//     id: "2",
//     title: "Paas ho gaya bhai",
//     body: "4 saal ki masti k baad bhi ho gaya hain pass, Hard to belive.",
//     reactions: 7,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default PostListProvider;
