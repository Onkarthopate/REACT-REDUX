import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {functDecre,functIncre} from './Action'
const App = () => {

    const count = useSelector(state=> state.count);
    const incrCount= useSelector(state=>state.incrCount);
    const decreCount= useSelector(state=>state.decreCount);
    const dispatch = useDispatch();

  return (
     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Redux Counter</h1>
      <h2>Total Count: {count}</h2>
      <p>Times Incremented: {incrCount}</p>
      <p>Times Decremented: {decreCount}</p>

      <button onClick={()=>dispatch(functIncre())}>Increment</button>
      <button onClick={()=>dispatch(functDecre())} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  )
}

export default App