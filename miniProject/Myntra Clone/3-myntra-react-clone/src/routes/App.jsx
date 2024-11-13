import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";


function App() {

  const fetchStatus = useSelector(state => state.fetchStatus)
  
  return (
    <div>
      <Header />
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <Loader/>:<Outlet/>}
      <Footer />
    </div>
  );
}

export default App;
