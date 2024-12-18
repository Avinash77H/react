import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagination() {
  const[page,setPage] = useState(1);
  const[data,setData] = useState([]);


 async function fetchPage(page){
    const baseUrl = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
    const response = await fetch(baseUrl);
    const data = await response.json();
    setData(data.posts)
  }

  useEffect(()=>{
    fetchPage(page)
  },[page])
  return (
    <div>
      <h1 className='heading'>Blogs</h1>
      {/* blogs */}
    
      <div className='w-screen flex justify-center px-20 mt-4'>
     <div className='flex flex-col gap-4 '>
      {
        
          data.map((post)=>(
            <div key={post.id}>
              <p className='font-bold'>{post.title}</p>
              <p>
                By<span>{post.author}</span> On <span className='font-semibold'>{post.category}</span>
              </p>
              <p>posted on {post.data}</p>
              <p>{post.content}</p>
              <div className='flex gap-4'>
                {post.tags.map((tag,index)=>{
                  return <span key={index} className='text-sky-600'>{`#${tag}`}</span>
                })}
              </div>
            </div>
          ))
}
    </div>
   </div>
      
      {/* pagination */}
      <div className='flex justify-center my-4'>
      <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disable">
      <span className="page-link">Previous</span>
    </li>
    <li className="page-item"><span className="page-link" href="#">1</span></li>
    <li className="page-item" aria-current="page">
      <span className="page-link" href="#">2</span>
    </li>
    <li className="page-item"><span className="page-link" href="#">3</span></li>
    <li className="page-item">
      <span className="page-link" href="#" >Next</span>
    </li>
  </ul>
</nav>
      </div>
    </div>
  )
}

export default Pagination
