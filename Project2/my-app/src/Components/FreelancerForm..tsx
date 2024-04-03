import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const FreelancerForm: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitle(e.target.value);
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/freelancers`);
      // Handle the response data (list of freelancers)
      console.log(response.data);
      toast.success("Freelancers found successfully!");
    } catch (error) {
      console.error("Error while searching for freelancers:", error);
      // Handle error (e.g., display error message)
      toast.error("Error while searching for freelancers");
    }
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <Card style={{ width: '25rem' }}>
          <Card.Header className="bg-primary text-white text-center">Search Freelancers by Job Title</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Enter job title" value={jobTitle} onChange={onInputChange} />
              </Form.Group>

              <Button variant="primary" type="submit" className="rounded-pill d-block mx-auto mt-2">
                Search
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
};

export default FreelancerForm;
