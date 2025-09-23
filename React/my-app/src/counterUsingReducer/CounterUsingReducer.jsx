import React, { useReducer } from "react";
import { useDispatch, useSelector } from 'react-redux'

const CounterUsingReducer = () => {
  const count = useSelector((state) => state.count)
  const totalClicks = useSelector((state) => state.totalClicks)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>COUNT: {count}</h2>
      <h3>Total Clicks: {totalClicks}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterUsingReducer;
