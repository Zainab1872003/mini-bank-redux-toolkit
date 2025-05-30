
import {useDispatch,useSelector} from 'react-redux';
import {increment} from '../redux/slices/bonusSlice';

const Bonus = () => {
  
  const dispatch = useDispatch();
  const points = useSelector(state=>state.bonus.points);

  return (
    <div className='card'>
      <div className="container">
        <h4>
          <b> Bonus Component</b>
        </h4>
        <h3>Total Points:${points}</h3>
        <button onClick={()=>{dispatch(increment())}}>INCREMENT+</button>
       
    
      </div>
      
    </div>
  )
}

export default Bonus