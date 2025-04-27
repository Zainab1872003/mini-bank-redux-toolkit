import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {increment,decrement,incrementByAmount, fetchUserById} from '../slices/accountSlice';

const Account = () => {
  const [value,setValue] = useState(0);
  const dispatch = useDispatch();
  const amount = useSelector(state=>state.account.amount);

  return (
    <div className='card'>
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Ammount:${amount}</h3>
        <button onClick={()=>{dispatch(increment())}}>INCREMENT+</button>
        <button onClick={()=>{dispatch(decrement())}}>DECREMENT+</button>
        <input type="text" onChange={(e)=>{setValue(+e.target.value)}} />
        <button onClick={()=>{dispatch(incrementByAmount(value))}}>INCREMENT BY {value}+</button>
        <button onClick={()=>{dispatch(fetchUserById(1))}}>GET USER</button>
    
      </div>
      
    </div>
  )
}

export default Account
