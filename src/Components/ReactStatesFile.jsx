import { useState } from "react";

function ReactStatesFile() {
  const [counter, setCounter] = useState(100);

  function IncrementNumber() {
    setCounter((oldcountervalue) => oldcountervalue + 1);
  }

  function DecrementNumber() {
    setCounter((oldcountervalue) => oldcountervalue - 1); // reduces the counter by 1
  }
  return (
    <>
      <button id="IncrementBtn" onClick={IncrementNumber}>
        Increment
      </button>
      <button id="DecrementBtn" onClick={DecrementNumber}>
        Decrement
      </button>
      <h2>Number set in counter is = {counter}</h2>
    </>
  );
}

export default ReactStatesFile;
