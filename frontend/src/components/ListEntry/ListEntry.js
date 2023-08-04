function ListEntry({id, task, date}) {
    return (
        <tr>
            <td>{task}</td>
            <td>{date}</td>
            <td>
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default ListEntry;
