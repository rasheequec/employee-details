import React from 'react';
import { Table } from 'react-bootstrap';

const List = ({searchText, changeHandle, employeeData}) => {
    return(
<div>
<div>
    <div className="search-container">
      <input type="text" placeholder="Search.." name="search" value={searchText} onChange={changeHandle}/>
      <i className="fa fa-search search-icon"></i>
    </div>
  </div>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Designation</th>
    </tr>
  </thead>
  <tbody>
    {employeeData.map((data, i) => {
        return(
        <tr key={i}>
        <td>{i+1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.designation}</td>
        </tr>
    )
    }) }
  </tbody>
</Table>
</div>
    )
}

export default List