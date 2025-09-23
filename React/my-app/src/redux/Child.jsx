import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, addBy, reset } from './store'

const Child = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);

  const parsed = Number(step) || 0;

  return (
    <div style={{ border: "2px solid green", padding: 20, marginTop: 20 }}>
      <h3>Child Component</h3>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>

      <div style={{ marginTop: 10 }}>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          placeholder="Step"
          style={{ width: "80px", marginRight: 10 }}
        />
        <button onClick={() => dispatch(addBy(parsed))}>
          Add by {parsed || 0}
        </button>
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default Child;
