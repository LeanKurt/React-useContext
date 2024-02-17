import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'buy_ingredients':
      return { ...state, myMoney: state.myMoney - 100 };
    case 'sell_ingredients':
      return { ...state, myMoney: state.myMoney + 100 };
    default:
      return state;
  }
};

function App() {
  const initialState = { myMoney: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Money: {state.myMoney}</h1>
      <button onClick={() => dispatch({ type: 'buy_ingredients' })}>Buy ingredients</button>
      <button onClick={() => dispatch({ type: 'sell_ingredients' })}>Sell ingredients</button>
    </div>
  );
}

export default App;
