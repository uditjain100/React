import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function Dashboard() {
  const [input, setInput] = useLocalStorage("inputValue", "");

  useUpdateLogger("Dashboard", input);

  return <input value={input} onChange={(e) => setInput(e.target.value)} />;
}

export default Dashboard;
