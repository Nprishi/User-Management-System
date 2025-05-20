// src/pages/ViewUser.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

function ViewUser() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.id.toString() === userId);
    if (foundUser) {
      setUser(foundUser);
    }
  }, [userId]);

  if (!user) {
    return (
      <Container className="mt-4">
        <h4>User Not Found</h4>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>View User Details</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control value={user.firstName} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control value={user.lastName} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control value={user.userName} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Type</Form.Label>
          <Form.Control value={user.userType} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control value={user.department} disabled />
        </Form.Group>
        <Button onClick={() => navigate('/')} variant="secondary">Back</Button>
      </Form>
    </Container>
  );
}

export default ViewUser;
