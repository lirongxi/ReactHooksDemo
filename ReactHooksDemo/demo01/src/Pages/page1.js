import React, {useState, useEffect } from 'react';

// export default class Page1 extends Component {
//   // constructor(props){
    
//   // }

//   render() {
//     let [num, setNum] = useState(0);
//     useEffect(() => {
//       console.log(`useEffect=>You clicked ${num} times`)
//     })
//     return (
//       <div>
//         <p>Page1 {num} times</p>
//         <button onClick={() => { setNum(num + 1) }}>click me</button>
//       </div>
//     )
//   }
// }

function Page1() {
  let [count1, setCount] = useState(0);
  useEffect(() => {
    console.log(`isNumber${count1}`);
    return ()=>{
      console.log(console.log('出Page1页面'));
    }
  },[count1])
  return (
    <div>
      <h3>Page1 {count1}</h3>
      <button onClick={() => setCount(count1 + 2)}>Click</button>
    </div>

  )
};

export default Page1;