import React from 'react'

function Blog({data}) {
  return (
    <div className="w-screen flex justify-center px-20 mt-4">
    <div className="flex flex-col gap-4">
      {data.map((post) => (
        <div key={post.id} className="border border-gray-500 px-4 py-2">
          <p className="font-bold">{post.title}</p>
          {/* <img src={post.img} alt="" className='border-2 border-black size-20'/> */}
          <p>
            By<span>{post.author}</span> On{" "}
            <span className="font-semibold">{post.category}</span>
          </p>
          <p>posted on {post.date}</p>
          <p>{post.content}</p>
          <div className="flex gap-4">
            {post.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="text-green-600"
                >{`#${tag}`}</span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Blog
