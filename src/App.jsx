import { useSelector } from "react-redux"
import Account from "./components/Account"
import Bonus from "./components/Bonus"
import Reward from "./components/Reward"
import './App.css'

function App() {
  const amount = useSelector(state=>state.account.amount);
  const points = useSelector(state=>state.bonus.points);
  return (
    <>
    <div className="App">
      <h4>APP</h4>
      <h3>Current Amount:{amount} </h3>
      <h3>Total Bonus: {points}</h3>
    </div>
    <Account/>
    <Bonus/>
    <Reward></Reward>



    </>
  )
}

export default App
