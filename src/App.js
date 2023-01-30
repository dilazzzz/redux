import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch()
    const { cash, dandom } = useSelector(state => state)


    const addCash = (cashChanger) => {
        const action = {}
            action.type = "ADD_CASH"
            action.payload = cashChanger
        dispatch(action)
    }
    const getCash = (cashChanger) => {
        dispatch({type: "GET_CASH", payload: cashChanger})
    }

    const changeDandom = () => {
        dispatch({type: "CHANGE_DANDOM"})
    }


  return (
    <div className="App">
      <h1>{cash}</h1>
      <h2>{dandom}</h2>
      <button onClick={() => addCash(Number(prompt()))}>Add</button>
      <button onClick={() => getCash(Number(prompt()))}>get</button>
      <button onClick={changeDandom}>changeDandom</button>
    </div>
  );
}

export default App;
