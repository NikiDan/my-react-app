import React from 'react';
import  {useState} from "react";
import {Button, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../Header/todo.list.css'
import './contentList.css'
import CheckIcon from '@mui/icons-material/Check';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';

const TodoItemComponent = ({item, onDelete, onEdit}) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [editedTodoName, setEditedTodoName] = useState('')
    // const [alert, setAlert] = useState(true)

    // const alertOn = () =>{
    //     setAlert(true)
    // }

    const changeTodoName = (e) => {
        setEditedTodoName(e.target.value)
    }
    const enableEditMode = () => {
        setIsEditMode(true)
    }

    const disableEditMode = () => {

        setIsEditMode(false)

        if (editedTodoName.length === 0) {
           // alertOn(setAlert)
        }
        else {
            onEdit(editedTodoName)
        }
    }

    return (
        <div className="todoItemsContainer">
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
            <div>
                {
                    isEditMode ?
                        <div className="buttonContainer">
                            <Button className="EditButton" variant="outlined" color = "success" onClick={disableEditMode}>
                                <CheckIcon className="dltEdtSaveBtn"/>
                            </Button>
                            {/*{*/}
                            {/*    alert ?*/}
                            {/*        <div>*/}
                            {/*            <Stack sx={{ width: '100%' }} spacing={2}>*/}
                            {/*                <Alert severity="error">It is empty !</Alert>*/}
                            {/*            </Stack>*/}
                            {/*        </div>*/}
                            {/*        :*/}
                            {/*        <div>*/}
                            {/*            <Stack sx={{ width: '100%' }} spacing={2}>*/}
                            {/*                <Alert severity="success">Success  — check it out !</Alert>*/}
                            {/*            </Stack>*/}
                            {/*        </div>*/}

                            {/*}*/}

                        </div>
                        :
                        <div className="buttonContainer">
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

export default TodoItemComponent;