import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');

  const nums = [1,2,3,4,5,6,7,8,9,10,11,12]

  const filteredNums = useMemo(() => {
    console.log("Rerendering...");
    return nums.filter((num) =>
    num.toString().includes(search))
  }, [search]);

  return (
    <div>
      <h2>UseMemo Example</h2>

      <input type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}      
      />
      <button onClick={()=>setCount(count+1)}>
        Change State Count ({count}) 
      </button>

      <ul>
      {filteredNums.map((num, i) => (
        <li key={i}>{num}</li>
      ))}
      </ul>
      
    </div>
  )
}

export default UseMemoExample
