import React from 'react';
import  {useState} from "react";
import {Button, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../Header/Header.css'
import './contentList.css'
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Content = ({item, onDelete, onEdit, statusTodo}) => {

    const [isEditMode, setIsEditMode] = useState(null)
    const [edit, setEdit] = useState('')

    const changeTodoName = (e) => {
        setEdit(e.target.value)
    }
    const enableEditMode = () => {
        setIsEditMode(true)
    }

    const disableEditMode = () => {

        setIsEditMode(false)

        if (edit.length === 0) {
        }
        else {
            onEdit(setEdit)
        }
    }

    return (
        <div className="todoItemsContainer">
            {
                isEditMode ?
                    <div className="buttonContainer">
                        <TextField
                            required
                            className = "todoItem"
                            id="outlined-required"
                            label="Edit"
                            value={item.title}
                            onChange={changeTodoName}
                        />
                    </div>
                        :
                    <div className="buttonContainer">
                        <Button variant="outlined"
                                color = "success"
                                className="lockBtn"
                                onClick = {statusTodo}
                        >
                            <DoneAllIcon className="dltEdtSaveBtn doneBtn"/>
                        </Button>
                        <TextField
                            disabled
                            className = "todoItem"
                            id="outlined-disabled"
                            value= {item}
                        />
                    </div>
            }
            <div>
                {
                    isEditMode ?
                        <div className="edtDltBtn">
                            <Button className="EditButton" variant="outlined" color = "success" onClick={disableEditMode}>
                                <CheckIcon className="dltEdtSaveBtn"/>
                            </Button>
                        </div>
                        :
                        <div className="edtDltBtn">
                            <Button className="EditButton" variant="outlined" onClick={enableEditMode}>
                                <EditIcon className="dltEdtSaveBtn"/>
                            </Button>
                            <Button className="DeleteButton" id="DeleteButton" variant="outlined" color="error" onClick={onDelete}>
                                <DeleteIcon className="dltEdtSaveBtn"/>
                            </Button>
                        </div>
                }
            </div>
        </div>
    );
};
export default Content;