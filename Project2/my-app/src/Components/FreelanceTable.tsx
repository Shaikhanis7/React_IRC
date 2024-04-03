import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Freelancer {
    name: string;
    jobTitle: string;
    location: string;
    email: string;
    phone: string;
  }
const FreelancerTable: React.FC = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchFreelancers();
  }, [searchQuery]);

  const fetchFreelancers = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/freelancers?jobTitle=Web Developer`);
      setFreelancers(response.data);
    } catch (error) {
      console.error('Error fetching freelancers:', error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mt-5">
      <h2>Freelancers</h2>
      <div className="card shadow">
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by job title"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {freelancers.map((freelancer, index) => (
                  <tr key={index}>
                    <td>{freelancer.name}</td>
                    <td>{freelancer.jobTitle}</td>
                    <td>{freelancer.location}</td>
                    <td>{freelancer.email}</td>
                    <td>{freelancer.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerTable;