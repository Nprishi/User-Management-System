// src/pages/EditUser.js
import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => u.id === parseInt(userId));
    if (found) setUser(found);
    else alert('User not found');
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updated = users.map(u => u.id === user.id ? user : u);
    localStorage.setItem('users', JSON.stringify(updated));
    navigate('/');
  };

  if (!user) return <Container><p>Loading...</p></Container>;

  return (
    <Container className="mt-4">
      <h3>Edit User</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name="userName" value={user.userName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Type</Form.Label>
          <Form.Select name="userType" value={user.userType} onChange={handleChange} required>
            <option>Admin</option>
            <option>System</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select name="department" value={user.department} onChange={handleChange} required>
            <option>Frontend</option>
            <option>Backend</option>
            <option>QA</option>
            <option>Marketing</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="success">Update User</Button>
      </Form>
    </Container>
  );
}

export default EditUser;
