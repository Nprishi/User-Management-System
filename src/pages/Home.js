// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const dummyUsers = [
  { id: 1, firstName: 'Rishi', lastName: 'Nepal', userName: 'rishik', userType: 'Admin', department: 'Frontend' },
  { id: 2, firstName: 'John', lastName: 'Doe', userName: 'johnd', userType: 'System', department: 'Backend' }
];

function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('users');
    if (!stored) {
      localStorage.setItem('users', JSON.stringify(dummyUsers));
      setUsers(dummyUsers);
    } else {
      setUsers(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  return (
    <Container className="mt-4">
      <h3>User List</h3>
      <Button className="mb-3" onClick={() => navigate('/user/create')}>Add User</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Type</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.userName}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>
                <span className={`badge bg-${u.userType === 'Admin' ? 'success' : 'warning'}`}>
                  {u.userType}
                </span>
              </td>
              <td>{u.department}</td>
              <td>
                <Button size="sm" variant="info" onClick={() => navigate(`/user/view/${u.id}`)} className="me-2">View</Button>
                <Button size="sm" variant="primary" onClick={() => navigate(`/user/update/${u.id}`)} className="me-2">Edit</Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(u.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
