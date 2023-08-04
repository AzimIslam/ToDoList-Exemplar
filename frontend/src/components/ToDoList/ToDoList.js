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

    const createTask = async() => {
        await fetch('http://localhost:8000/api/addTask/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: newTask,
                date: newDate,
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                disableForm();
            } else {
                alert('Error creating task');
            }
        })
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
                <tbody>
                    { showForm ?
                    <tr>
                        <td>
                            <input type="text" value={newTask} class="form-control" placeholder="Task" onChange={(e) => setNewTask(e.target.value)} />
                        </td>
                        <td>
                            <input type="date" value={newDate} class="form-control" placeholder="Due date" onChange={(e) => setNewDate(e.target.value)}/>
                        </td>
                        <td colSpan={1}> 
                            <button type="button" class="btn btn-success" onClick={createTask}>Create</button>
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