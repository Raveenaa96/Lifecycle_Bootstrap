import { useState, useEffect, Fragment } from "react";
 
export function FetchApiGet2() {
  const [data, setData] = useState();
 
  useEffect(() => {
    getUserDetails();
  }, []);
 
  const getUserDetails = async () => {
    let response = await fetch('https://fakestoreapi.com/products/');
    let responseData = await response.json();
    if (responseData && responseData != null) {
      setData(responseData);
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
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th colSpan={2}>Rating</th>
            </tr>
          </thead>
          <tbody>
           
                {(data && data.length != 0) &&
                (
                    data.map((value,index)=>{
                        const {id,title,price,description,category,rating,rate,count} = value
                        return <Fragment key={index}>
                            <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{price}</td>
                                <td>{description}</td>
                                <td>{category}</td>
                                <td>{rating.rate}</td>
                                <td>{rating.count}</td>
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
 