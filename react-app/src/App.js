import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Article from "./Components/Article"

function App() {
  const topics = [
    {id: 1, title:"html", body: "html is ..."},
    {id: 2, title:"css", body: "css is ..."},
    {id: 3, title:"js", body: "js is ..."}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Header title="REACT"></Header>
        <Nav topics = {topics}></Nav>
        <Article title="리액트 어려워영" body="리액트 어떻게 했는지 다 까묵"></Article>
      </header>
    </div>
  );
}

export default App;
