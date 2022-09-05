import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("")
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo ==="") {
      return
    }
    setTodos((currentArray) => [toDo, ...currentArray])
    setTodo("")
  }
  console.log(toDos)
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
      <button>Add To Do</button>
      </form>
      <hr />
      {/* //map이란 array안에 특정한 element들을 바꾸고싶고, 다 바뀐 새로운 array를 쓰고 싶을때 씀
      // map안엔 함수를 넣을 수 있는데 그 함수는 array의 모든 item에 대해 실행됨 */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
