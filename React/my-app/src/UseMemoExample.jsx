import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const filteredNumbers = useMemo(() => {
    console.log("Filtering numbers..."); // will run only when search changes
    return numbers.filter((num) => num.toString().includes(search));
  }, [search]);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">useMemo Example</h2>

      <input
        type="text"
        placeholder="Search number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mt-2"
      />

      <button
        onClick={() => setCount(count + 1)}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment Count ({count})
      </button>

      <div className="mt-4">
        <h3 className="font-semibold">Filtered Numbers:</h3>
        <ul>
          {filteredNumbers.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseMemoExample;
