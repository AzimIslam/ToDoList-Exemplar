import React, {useState} from 'react';

function ListEntry({id, task, date, deleteTask, editTask}) {

    const [editMode, setEditMode] = useState(false);

    const [newTask, setNewTask] = useState(task);
    const [newDate, setNewDate] = useState(date);

    const handleDelete = async() => {
        deleteTask(id)
    }

    const handleEdit = async() => {
        if (editTask(id, newTask, newDate)) {
            setEditMode(false);
        }
    }

    return (
        <tr>
            <td>
                {!editMode ? task :  <input type="text" value={newTask} class="form-control" placeholder="Task" onChange={(e) => setNewTask(e.target.value)}/>}
            </td>
            <td>
                {!editMode ? date : <input type="date" value={newDate} class="form-control" placeholder="Due date" onChange={(e) => setNewDate(e.target.value)}/>}
            </td>
            <td>
                {!editMode ? 
                <>
                    <button type="button" class="btn btn-primary" onClick={() => setEditMode(true)}>Edit</button>
                    <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>
                </>
                :   <>
                        <button type="button" class="btn btn-success" onClick={handleEdit}>Save</button>
                        <button type="button" class="btn btn-danger" onClick={() => setEditMode(false)}>Cancel</button>
                    </>
                }
            </td>
        </tr>
    )
}

export default ListEntry;
