export function SearchEmployee({ setSearchText, handleSearch }) {
  return (
    <div className="d-flex justify-content-end container">
        <form className="w-25">
            <div className="input-group">
                <button onClick={handleSearch} className="btn btn-dark">Search</button>
                <input
                className ="form-control"
                type="search"
                onChange={(event) => setSearchText(event?.target?.value)}
            />
            </div>
        </form>
    </div>    
  );
}