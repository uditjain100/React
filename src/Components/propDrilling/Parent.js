import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div>{count}</div>
      <Child value={count} setValue={setCount}></Child>
    </React.Fragment>
  );
}

export default Parent;
