
import {useDispatch,useSelector} from 'react-redux';
import { increment ,incrementbyAmount} from '../reducers/reward';
import { incrementByAmount } from '../slices/accountSlice';
import { useState } from 'react';

function Reward(){
  
  const dispatch = useDispatch();
  const points = useSelector(state=>state.reward.points);
  const [value,setValue] = useState(0);
  return (
    <div className='card'>
      <div className="container">
        <h4>
          <b> Reward Component</b>
        </h4>
        <h3>Total Points:${points}</h3>
        <button onClick={()=>{dispatch(increment())}}>INCREMENT+</button>
        <input type="text" onChange={(e)=>{
          setValue(+e.target.value)
        }} />
        <button onClick={()=>{dispatch(incrementbyAmount(value))}}>incrementbyAmount+</button>
       
    
      </div>
      
    </div>
  )
};

export default Reward