import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        totalClicks: state.totalClicks + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        totalClicks: state.totalClicks + 1,
      };
    case "RESET":
      return {
        count: 0,
        totalClicks: 0,
      };
    default:
      return state;
  }
};

const CounterUsingReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    totalClicks: 0,
  });
  return (
    <div>
      <h2>COUNT: {state.count}</h2>
      <h3>Total Clicks: {state.totalClicks}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterUsingReducer;
