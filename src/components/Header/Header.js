import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './Header.css';
import Content from "../Content/Content";
import { nanoid } from 'nanoid'

const Header = ({todoItems, setTodoItems}) => {

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
            setTodoItems(
                [...todoItems, {
                    id: nanoid(),
                    title: newTodo,
                    status: false
                }]
            )
            setNewTodo('')
        }
    }

    const deleteItem = (index) => {
        let deleteTodo = [...todoItems].filter(item => item.index !== index)
        setTodoItems(deleteTodo)
    }

    const EditTodo = (index, title) => {
        const editedTodos = todoItems.map((item, index) => {
            if(item.index === index) {
                return title
            }
            return item
        })
        updateTodo(editedTodos);
        // setEdit(index)
        // setValue(title)
    }

    const statusTodo = (index) => {
        let newStatus = [...todoItems].filter(item => {
            if(item.index === index){
                item.status = !item.status
            }
            return item
        })
            setTodoItems(newStatus)
    }
    console.log(todoItems)

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
                    todoItems.map((item, index) => <Content
                        item = {item.title}
                        key = {index}
                        statusTodo = {() => statusTodo(item.index)}
                        onDelete = {() => deleteItem(item.index)}
                        onEdit = {(editTodo) => EditTodo(index, editTodo)}
                    />)
                }
            </div>
        </div>
    );
};

export default Header;