import React from "react";
import { useSelector } from "react-redux";
import Child from "./Child";

export default function Parent() {
  const count = useSelector((state) => state.counterState.value);

  return (
    <div style={{ border: "2px solid blue", padding: 20, marginTop: 20 }}>
      <h2>Parent Component</h2>
      <p>
        Parent reads from Redux store: <strong>{count}</strong>
      </p>

      <Child />
    </div>
  );
}
