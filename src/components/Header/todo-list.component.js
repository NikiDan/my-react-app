import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './todo.list.css';
import TodoItemComponent from "../content/todo-Item.component";

const TodoListComponent = () => {

    const [todoItems, setTodoItems] = useState([])
    const [newTodo, setNewTodo] = useState('')

    const updateTodo = (todoItems) => {
        setTodoItems(todoItems);
    }

    const changeNewTodoName = (e) => {
        setNewTodo(e.target.value)
    }

    const AddTodoItem = () => {
        if (newTodo.length === 0) {
            console.log('Пустая строка')
        } else {
            updateTodo([...todoItems, newTodo])
            setNewTodo('');
        }
    }

    const deleteItem = (indexToDelete) => {
        updateTodo(todoItems.filter((item, i) => i !== indexToDelete))
    }

    const EditTodo = (indexToEdit, editName) => {
        const editedTodos = todoItems.map((item, index) => {
            if(index === indexToEdit) {
                return editName
            }
            console.log(index)
            console.log(indexToEdit)
            return item
        })
        updateTodo(editedTodos);
    }

    return (
        <div className="todoForm">
            <h2 className="titleText">What do you want to do today ?</h2>
            <div className="mainPanel">
                <TextField
                    className="mainField"
                    value={newTodo}
                    onChange={changeNewTodoName}
                    id="outlined-basic"
                    label="ToDo"/>
                <Button className="AddButton"
                        variant="outlined"
                        id="AddButton"
                        onClick={AddTodoItem}>
                    Add
                </Button>
            </div>
            <div>
                {
                    todoItems.map((item, index) => <TodoItemComponent
                        item = {item}
                        key = {index}
                        onDelete = {() => deleteItem(index)}
                        onEdit = {(editTodo) => EditTodo(index, editTodo)}
                    />)
                }
            </div>

        </div>
    );
};

export default TodoListComponent;