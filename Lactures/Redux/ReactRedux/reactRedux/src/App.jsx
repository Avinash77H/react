
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { buy_pen } from './redux/reducer';
import { buy_pencil } from './redux/reducer';

function App() {
  const pen = useSelector((state)=>state.pen);
  const pencil = useSelector((state)=>state.pencil);

  const dispatch = useDispatch()

  return (
   <div className='text-center flex  flex-col  gap-4 justify-center mt-12'>
    <h1 className='text-white bg-purple-500 px-2 py-1 text-3xl'>this is redux container</h1>
    <div >
      <button onClick={()=>dispatch(buy_pen())}>buy Pen</button> : 
      <span className='font-bold'>{pen}</span>
    </div>
    <div>
      <button onClick={()=>dispatch(buy_pencil())}>buy pencil</button> : 
      <span className='font-bold'>{pencil}</span>
    </div>
   </div>
  )
}

export default App
