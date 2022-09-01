import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword((event) => {})
  console.log("i run all the time");
  // const iRunOnlyOnlyOnce = () => {
  //   console.log("i run only once.")
  // }
  // useEffect( iRunOnlyOnlyOnce, [] )
  useEffect(() => {
    console.log("call the api...")
  }, [])

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..."></input>
      <div>{counter}</div>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
