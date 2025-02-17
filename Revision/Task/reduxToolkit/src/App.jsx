import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./redux/ProductSlice";
import "./App.css";
function App() {
  const value = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
   <div>
      <h1 >This is App Components</h1>
      <div >{value}</div>
      <button  onClick={() => dispatch(increment())}>increment</button>
      <button  onClick={() => dispatch(decrement())}>decrement</button>
    </div>
    </>
  );
}

export default App;
