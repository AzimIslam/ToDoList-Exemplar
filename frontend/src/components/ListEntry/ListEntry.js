function ListEntry({id, task, date, deleteTask}) {

    const handleDelete = async() => {
        deleteTask(id)
    }

    return (
        <tr>
            <td>{task}</td>
            <td>{date}</td>
            <td>
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default ListEntry;
