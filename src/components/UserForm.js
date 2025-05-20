import React from 'react';
import { Form, Button } from 'react-bootstrap';

function UserForm({ user, handleChange, handleSubmit, isEdit = false }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          name="userName"
          value={user.userName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>User Type</Form.Label>
        <Form.Select name="userType" value={user.userType} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Admin">Admin</option>
          <option value="System">System</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Select name="department" value={user.department} onChange={handleChange} required>
          <option value="">-- Select --</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="QA">QA</option>
          <option value="Marketing">Marketing</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="success">
        {isEdit ? 'Update' : 'Create'} User
      </Button>
    </Form>
  );
}

export default UserForm;
