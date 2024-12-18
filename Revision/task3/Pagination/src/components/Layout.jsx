import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";
import Blog from "./Blog";
import Pagination from "./Pagination";

function Layout() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);

  async function fetchPage(page) {
    setLoading(true)
    const baseUrl = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
    const response = await fetch(baseUrl);
    const data = await response.json();
    setData(data.posts);
    setLoading(false)
  }

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  return (
    <div>
      {loading?<Loader/>:<div>
      <h1 className="heading">Blogs</h1>
      <Blog data={data}/>      
      <Pagination page={page} setPage={setPage}/>
    </div>}
    </div>
  );
}

export default Layout;
