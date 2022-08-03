import React from 'react';
import  {useState} from "react";
import {Button, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../Header/Header.css'
import './contentList.css'
import CheckIcon from '@mui/icons-material/Check';
import 'animate.css';

const Content = ({item, onDelete, onEdit}) => {

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
            onEdit(edit)
        }
    }

    return (
        <div className = "todoItemsContainer animate__animated animate__backInUp">
            {
                isEditMode ?
                    <div  className="buttonContainer">
                        <TextField
                            required
                            className = "todoItem"
                            id="outlined-required"
                            label="Edit"
                            value={edit}
                            onChange={changeTodoName}
                        />
                    </div >
                        :
                    <div className="buttonContainer">
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