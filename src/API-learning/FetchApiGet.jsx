import { useState, useEffect, Fragment } from "react";
 
export function FetchApiGet() {
  const [data, setData] = useState();
 
  useEffect(() => {
    getUserDetails();
  }, []);
 
  const getUserDetails = async () => {
    let url = "https://reqres.in/api/users";
    let option = {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    };
 
    let response = await fetch(url, option);
    let responseData = await response.json();
    if (responseData && responseData?.data && responseData.data != null) {
      setData(responseData?.data);
    }
  };
 
  return (
    <div>
      <div className="heading">
        <p className="h1 text-center text-white bg-success">Fetch GET API</p>
      </div>
 
      <div className="response-data">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Year</th>
              <th>Color</th>
              <th>pantone value</th>
            </tr>
          </thead>
          <tbody>
           
                {(data && data.length != 0) &&
                (
                    data.map((value,index)=>{
                        const {id,name,year,color,pantone_value} = value
                        return <Fragment key={index}>
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{year}</td>
                                <td><span style={{color:`${color}`}}></span></td>
                                <td>{pantone_value}</td>
                            </tr>
                        </Fragment>
                    })
                ) }
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
 