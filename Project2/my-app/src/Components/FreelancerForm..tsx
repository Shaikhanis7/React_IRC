import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FreelancerTable from './FreelancerTable';

export interface Freelancer {
  id: number;
  name: string;
  jobTitle: string;
  location: string;
  email: string;
  phone: string;
}

const FreelancerForm: React.FC = () => {
  const [formData, setFormData] = useState<Freelancer>({
    id: 0,
    name: '',
    jobTitle: '',
    location: '',
    email: '',
    phone: ''
  });

  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    fetchFreelancers();
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const fetchFreelancers = async () => {
    try {
      const response = await axios.get<Freelancer[]>(`http://localhost:8080/api/freelancers`);
      setFreelancers(response.data);
      setDisplayTable(true);
    } catch (error) {
      console.error("Error while fetching freelancers:", error);
      toast.error("Error while fetching freelancers");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.id === 0) {
        const response = await axios.post<Freelancer>(`http://localhost:8080/api/freelancers`, formData);
        toast.success("Freelancer added successfully!");
      } else {
        const response = await axios.put<Freelancer>(`http://localhost:8080/api/freelancers/${formData.id}`, formData);
        toast.success("Freelancer updated successfully!");
      }
      setFormData({
        id: 0,
        name: '',
        jobTitle: '',
        location: '',
        email: '',
        phone: ''
      });
      fetchFreelancers(); // Fetch the updated list of freelancers after adding or updating
    } catch (error) {
      console.error("Error while adding/updating freelancer:", error);
      toast.error("Error while adding/updating freelancer");
    }
  };

  const editFreelancer = (freelancer: Freelancer) => {
    setFormData(freelancer);
  };

  const deleteFreelancer = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/freelancers/${id}`);
      toast.success("Freelancer deleted successfully!");
      fetchFreelancers(); // Fetch the updated list of freelancers after deletion
    } catch (error) {
      console.error("Error while deleting freelancer:", error);
      toast.error("Error while deleting freelancer");
    }
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <Card style={{ width: '25rem' }}>
          <Card.Header className="bg-primary text-white text-center">Add Freelancer</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={onInputChange} />
              </Form.Group>
              <Form.Group controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Enter job title" name="jobTitle" value={formData.jobTitle} onChange={onInputChange} />
              </Form.Group>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" name="location" value={formData.location} onChange={onInputChange} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={onInputChange} />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" name="phone" value={formData.phone} onChange={onInputChange} />
              </Form.Group>
              <Button variant="primary" type="submit" className="rounded-pill d-block mx-auto mt-2">
                {formData.id === 0 ? 'Add Freelancer' : 'Update Freelancer'}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="container mt-5">
        {displayTable && <FreelancerTable freelancers={freelancers} onEdit={editFreelancer} onDelete={deleteFreelancer} />}
      </div>
      <ToastContainer />
    </>
  );
};

export default FreelancerForm;
