import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  fetchFreelancers: () => void;
}

const AddFreelancerForm: React.FC<Props> = ({ fetchFreelancers }) => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    location: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/freelancers', formData);
      fetchFreelancers(); // Refresh the list of freelancers after adding a new one
      setFormData({
        name: '',
        jobTitle: '',
        location: '',
        email: '',
      });
    } catch (error) {
      console.error('Error adding freelancer:', error);
    }
  };

  return (
    <div>
      <h2>Add Freelancer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            className="form-control"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Freelancer
        </button>
      </form>
    </div>
  );
};

export default AddFreelancerForm;
