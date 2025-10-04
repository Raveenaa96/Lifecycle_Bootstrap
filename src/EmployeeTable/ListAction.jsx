export function ListAction({ handleUpdate, handleDelete, index }) {
  return (
    <div>
      <button onClick={() => handleUpdate(index)} className="btn btn-primary m-1">Edit</button>
      <button onClick={() => handleUpdate(index)} className="btn btn-success m-1">Update</button>
      <button onClick={() => handleDelete(index)} className="btn btn-danger m-1">Delete</button>
    </div>
  );
}