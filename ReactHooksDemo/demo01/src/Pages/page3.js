import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

export default function Page3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      {/*======关键代码 */}
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>

    </div>
  )
}

function Counter() {
  const count = useContext(CountContext)  //一句话就可以得到count
  return (<h2>{count}</h2>)
}
