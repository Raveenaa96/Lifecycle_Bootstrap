import { useState } from "react";

export function AddEmployee({ addRecord }) {
  const [formData, setFormData] = useState();

  const handleChange = (event) => {
    const fieldname = event?.target?.name;
    const fieldvalue = event?.target?.value;

    setFormData({ ...formData, [fieldname]: fieldvalue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData)
    addRecord(formData);
  };

  return (
    <div className="container mt-5 d-flex flex-column w-50">
      <div className="heading text-center">
        <h2> Employee Form </h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="bg-dark rounded text-white p-3 my-2">
          <div className="form-group row p-2">
            <label className="col-md-4 col-form-label text-center"> Employee ID</label>
            <div className="col-md-8">
                <input 
                  type="text" 
                  name="empid" 
                  onChange={handleChange} 
                  className="form-control"
              />
            </div>
          </div>
          <div className="form-group row p-2">
            <label className="col-md-4 col-form-label text-center"> Employee Name</label>
            <div className="col-md-8">
              <input className="form-control" type="text" name="emp_name" onChange={handleChange} />
              </div>
          </div>
          <div className="form-group row p-2">
            <label className="col-md-4 col-form-label text-center"> Employee Designation</label>
            <div className="col-md-8">
            <input className="form-control" type="text" name="designation" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group row p-2">
            <label className="col-md-4 col-form-label text-center"> Employee Location</label>
            <div className="col-md-8">
            <input className="form-control col-md-4" type="text" name="workLocation" onChange={handleChange} />
            </div>
          </div>
          <div className="form-group p-2 text-center mt-4">
            <input type="submit" value="ADD Records" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}