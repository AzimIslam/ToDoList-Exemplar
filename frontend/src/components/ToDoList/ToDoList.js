import React, { useState } from 'react';
import ListEntry from '../ListEntry/ListEntry';

function ToDoList() {

    const [showForm, setShowForm] = useState(false);

    const [newTask, setNewTask] = useState('');
    const [newDate, setNewDate] = useState();

    const enableForm = () => {
        setShowForm(true);
    }

    const disableForm = () => {
        setShowForm(false);
    }

    return (
        <div className="container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Due date</th>
                        <th scope="col" colSpan={2} style={{textAlign: 'center'}}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <ListEntry id={1} task="Task 1" date="2021-10-01" />
                <ListEntry id={2} task="Task 1" date="2021-10-01" />
                <tbody>
                    { showForm ?
                    <tr>
                        <td>
                            <input type="text" value={newTask} class="form-control" placeholder="Task" />
                        </td>
                        <td>
                            <input type="date" value={newDate} class="form-control" placeholder="Due date" />
                        </td>
                        <td colSpan={1}> 
                            <button type="button" class="btn btn-success">Create</button>
                        </td>
                    </tr> : null
                    }
                </tbody>
            </table>
            
            { !showForm ? 
                <button type="button" class="btn btn-success" onClick={enableForm}>Add</button>
                : <button type="button" class="btn btn-danger" onClick={disableForm}>Cancel</button> 
            }
        </div>
    )
}

export default ToDoList;