import React,{useState} from 'react';

export default function App(){

  const [ count , setCount ] = useState(6);
  const [ str , setStr ] = useState('string');
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <p>You clicked {str} times</p>
            <button onClick={()=>{setStr('number')}}>click me</button>
        </div>
    )
};