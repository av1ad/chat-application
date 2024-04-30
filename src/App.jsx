import "./App.css";
import List from "./components/list/List"
import Detail from "./components/Detail/Detail";
import Chat from "./components/Chat/Chat";

function App() {

  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
      
    </div>
  );
}

export default App;
