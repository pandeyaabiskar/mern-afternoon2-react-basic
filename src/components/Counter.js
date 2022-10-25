import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //Mounting
  // useEffect(() => {
  //     console.log("Component renders")
  // }, [])

  //Update with no dependency
//   useEffect(() => {
//       console.log("Component renders")
//   })

  //Update with dependency
//   useEffect(() => {
//     console.log("Component renders");
//   }, [counter]);

  //Unmounting
    // useEffect(() => {
    //     console.log("Component Mounts")

    //     return () => {
    //         console.log("Cleanups here")
    //     }
    // }, [])

  const incrementByOne = () => {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
  };

  const decrementByOne = () => {
    // setCounter(counter - 1);
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <Button clickHandler={decrementByOne}>Decrement</Button>
      <div>{counter}</div>
      <Button clickHandler={incrementByOne}>Increment</Button>
<br/><br/>
      <Button clickHandler={() => setCounter2((prev) => prev - 1)}>
        Decrement
      </Button>
      <div>{counter2}</div>
      <Button clickHandler={() => setCounter2((prev) => prev + 1)}>
        Increment
      </Button>
    </div>
  );
}

export default Counter;
