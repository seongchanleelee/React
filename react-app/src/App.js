import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Article from "./Components/Article"
import {useState} from "react"

function App() {
  // const mode = useState("WELCOME");
  const mode = "WELCOME";
  const topics = [
    {id: 1, title:"html", body: "html is ..."},
    {id: 2, title:"css", body: "css is ..."},
    {id: 3, title:"js", body: "js is ..."}
  ]

  let content = null;
  if (mode === "READ") {
    content = <Article title="welcome" body="리액트 어떻게 했는지 다 까묵"></Article>
  } else if (mode ==="WELCOME") {
    content = <Article title="read" body="리액트 어떻게 했는지 다 까묵"></Article>
  }


  return (
    <div className="App">
      <header className="App-header">
        <Header title="REACT" onChangeMode = {() => 
        {mode = "WELCOME";}
        }></Header>
        <Nav topics = {topics} onChangeMode = {(id) => {
          mode = "READ"
        }}></Nav>
        {content}
      </header>
    </div>
  );
}

export default App;
