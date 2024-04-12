import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const FreelancerList = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchFreelancers();
  }, [page, sortBy, sortOrder]);

  const fetchFreelancers = async () => {
    try {
      const response = await axios.get(`/api/freelancers?page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}`);
      setFreelancers(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching freelancers:', error);
      // Handle error here (e.g., display an error message to the user)
    }
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage - 1);
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div>
      {/* Render your list of freelancers here */}
      {/* Example: */}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('jobTitle')}>Job Title</th>
            <th onClick={() => handleSort('location')}>Location</th>
            <th onClick={() => handleSort('email')}>Email</th>
          </tr>
        </thead>
        <tbody>
          {freelancers.map((freelancer: any) => (
            <tr key={freelancer.id}>
              <td>{freelancer.name}</td>
              <td>{freelancer.jobTitle}</td>
              <td>{freelancer.location}</td>
              <td>{freelancer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render pagination */}
      <Stack spacing={2}>
        <Pagination count={totalPages} page={page + 1} onChange={handlePageChange} />
      </Stack>
    </div>
  );
};

export default FreelancerList;
