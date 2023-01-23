import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const object = {
    name: "value",
    age: "just a number",
  };

  const memorizedObject = useMemo(() => object, []);

  const fn = () => {
    return 25;
  };

  const memorizedFunction = useCallback(() => fn, []);

  console.log("Parent");
  return (
    <React.Fragment>
      <h1>useMemo and useCallback</h1>
      <h1>{count}</h1>
      <h1>{text}</h1>
      <button onClick={(e) => setCount(count + 1)}>Change Count</button>
      <button onClick={(e) => setText(text + "...")}>Change Text</button>
      <Child data={text} obj={memorizedObject} fun={memorizedFunction}></Child>
    </React.Fragment>
  );
}

export default Parent;
