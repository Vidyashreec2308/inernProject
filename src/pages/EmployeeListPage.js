import React, { useState } from 'react';
import '../style/EmployeeListPageStyle.css'; 
import { Link } from 'react-router-dom';

const EmployeeListPage = () => {
    const employees = [
        { id: 1, name: 'Arjun', dob: '1990-05-15', role: 'Software Engineer' },
        { id: 2, name: 'Mahesh', dob: '1988-11-25', role: 'Web Developer' },
        { id: 3, name: 'Suresh', dob: '1995-09-10', role: 'Designer' },
        { id: 4, name: 'Kishor', dob: '1992-07-30', role: 'Analyst' },
        { id: 5, name: 'Ali', dob: '1985-12-05', role: 'Developer' },
      ];

      const [searchQuery, setSearchQuery] = useState('');

      const filteredEmployees = employees.filter((employee) =>
          employee.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      const handleSearch = (e) => {
          setSearchQuery(e.target.value);
      };
    return (
        <div className="employee-page-container">
        <button className="customer-care"></button>
       <div className="notification-circle"></div>
       <div className="notification-text">4</div>
       <div className="logo-container"></div>
       <input
                className='search-bar'
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleSearch}
            />
       <div className="employee-container">
      {filteredEmployees.map((employee, index) => (
        <div className="employee-card" key={employee.id}>
          <div className="card-number">{index + 1}</div> <br></br>
          <div className='emp-id'>ID: {employee.id}</div> <br></br>
          <div className='emp-name'>Name: {employee.name}</div> <br></br>
          <div className='emp-dob'>DOB: {employee.dob}</div> <br></br>
          <div className='emp-role'>Role: {employee.role}</div> <br></br>
        </div>
      ))}
    </div>
       <div className="rectangle-bottom"></div>
       <Link to="/employee-list">
        <button className='employee-list'></button>
      </Link>
      <Link to="/">
        <button className='home'></button>
      </Link>
       </div>
    )
};
export default EmployeeListPage;