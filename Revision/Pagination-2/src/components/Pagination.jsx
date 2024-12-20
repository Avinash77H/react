import React, { useEffect, useState } from 'react'
import Loader from "../components/Loader"

function Pagination() {
    const [data, setData] = useState([]);
    const [loader,setLoader] = useState(false);
    const [page,setPage] = useState(1);
    const PRODCUTPERPAGE = 7;
    
  

   

    useEffect(() => {
        const fetchData = async () => {
            setLoader(true)
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json()
            setData(data)
            setLoader(false)
        }
        fetchData();
    }, [])

    let lastIndex = PRODCUTPERPAGE * page;
    let firstIndex = lastIndex - PRODCUTPERPAGE;
    let newData = data.slice(firstIndex,lastIndex);
    
    let PAGINATIONCOUNT = Math.ceil(data.length/PRODCUTPERPAGE);
    

   console.log(lastIndex)
   
    return (
        <div>
            <div className="flex flex-wrap justify-around">
           {
                loader?<Loader/>:newData.map((item) => {
                    return (
                      <div key={item.id} className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
                        <a href="#">
                          <img
                            className="rounded-t-lg h-32 mx-auto"
                            src={item.image}
                            alt=""
                          />
                        </a>
                        <div className="p-5">
                          <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {item.title}
                            </h5>
                          </a>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
           
        </div>
        <div className='flex justify-center items-center'>
            <button className='btn' onClick={()=>setPage((prev)=>prev - 1)} disabled={firstIndex <= 0}>prev</button>
            
            {
                Array(PAGINATIONCOUNT).fill(null).map((_,index)=><div key={index} className='btn' onClick={()=>setPage(index+1)}>{index + 1}</div>)
            }
            <button className='btn' onClick={()=>setPage((prev)=>prev + 1)} disabled={lastIndex >= data.length}>next</button>.
        </div>
            
        </div>
    )
}

export default Pagination