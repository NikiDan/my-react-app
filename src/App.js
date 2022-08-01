 import './App.css';
import React, {useState} from "react";
import Header from "./components/Header/Header";
import { nanoid } from 'nanoid'


function App() {

    const [todoItems, setTodoItems] = useState([
        {
            index: nanoid(),
            title: 'Just to do',
            status: false
        }
    ])

  return (
      <div className="App">
        <Header todoItems = {todoItems} setTodoItems = {setTodoItems}/>
      </div>
  );
}

export default App;

