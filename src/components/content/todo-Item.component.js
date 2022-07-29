import React from 'react';
import  {useState} from "react";
import {Button, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../Header/todo.list.css'
import './contentList.css'

const TodoItemComponent = ({item, onDelete, onEdit}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [editedTodoName, setEditedTodoName] = useState('')

    const changeTodoName = (e) => {
        setEditedTodoName(e.target.value)
    }
    const enableEditMode = () => {
        setIsEditMode(true)
    }

    const disableEditMode = () => {
        setIsEditMode(false)
        onEdit(editedTodoName)
    }
    return (
        <div className="todoItems">
            {
                isEditMode ?
                    <TextField
                        required
                        className = "todoItem"
                        id="outlined-required"
                        label="Edit"
                        value={editedTodoName}
                        onChange={changeTodoName}
                    />
                    :
                    <TextField
                        disabled
                        className = "todoItem"
                        id="outlined-disabled"
                        value= {item}
                    />

            }
            <div className="DeleteEditButton">
                {
                    isEditMode ?
                        <Button className="EditButton" variant="contained" color = "success" onClick={disableEditMode}>
                            Save
                        </Button>
                        :
                        <Button className="EditButton" variant="contained" onClick={enableEditMode}>
                            <EditIcon/>
                        </Button>
                }
                <Button className="DeleteButton" id="DeleteButton" variant="contained" onClick={onDelete}>
                    <DeleteIcon />
                </Button>
            </div>

        </div>
    );
};

export default TodoItemComponent;