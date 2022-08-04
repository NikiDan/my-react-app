 import './App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";

function App() {

    const [todoItems, setTodoItems] = useState([])

  return (
      <div className="App">
        <Header todoItems = {todoItems}
                setTodoItems = {setTodoItems}/>
      </div>
  );
}

export default App;

