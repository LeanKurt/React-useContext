import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  if(action.type == 'remove_cart'){
    if (state.quantity > 0) {
      return {
        ...state,
        price: Math.max(0, state.price - 100),
        quantity: Math.max(0, state.quantity - 1)
      }
    }
  } else if(action.type == 'add_cart') {
    return{...state, price: state.price + 100, quantity: state.quantity + 1};
  }
  return state;
};

function App() {
  const initialState = { price: 100 , quantity: 1};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>price: {state.price}</h1>
      <h1>quantity: {state.quantity}</h1>
      <button onClick={() => dispatch({ type: 'remove_cart' })}>-</button>
      <button onClick={() => dispatch({ type: 'add_cart' })}>+</button>
    </div>
  );
}

export default App;
