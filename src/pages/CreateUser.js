// src/pages/CreateUser.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    userType: 'Admin',
    department: 'Frontend',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
      ...formData,
      id: Date.now(), // simple unique ID
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h3>Create New User</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name="userName" value={formData.userName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Type</Form.Label>
          <Form.Select name="userType" value={formData.userType} onChange={handleChange} required>
            <option>Admin</option>
            <option>System</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select name="department" value={formData.department} onChange={handleChange} required>
            <option>Frontend</option>
            <option>Backend</option>
            <option>QA</option>
            <option>Marketing</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary">Create User</Button>
      </Form>
    </Container>
  );
}

export default CreateUser;
