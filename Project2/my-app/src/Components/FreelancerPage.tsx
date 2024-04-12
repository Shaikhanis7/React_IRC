import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FreelancerTable from './FreelancerTable';
import Pagination from './Pagination';
import AddFreelancerForm from './AddFreelancerForm';
import { Freelancer } from './types';

const FreelancerPage: React.FC = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchFreelancers();
  }, [currentPage, sortBy, sortOrder]);

  const fetchFreelancers = async () => {
    try {
      const response = await axios.get(`/api/freelancers`, {
        params: {
          page: currentPage,
          sortBy,
          sortOrder,
        },
      });
      setFreelancers(response.data.freelancers || []); // Ensure freelancers is an array even if it's undefined
      setTotalPages(response.data.totalPages || 1); // Set default total pages to 1 if undefined
    } catch (error) {
      console.error('Error fetching freelancers:', error);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (column: string) => {
    setSortBy(column);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="container">
      <h1>Freelancers</h1>
      <AddFreelancerForm fetchFreelancers={fetchFreelancers} />
      <FreelancerTable freelancers={freelancers} handleSort={handleSort} />
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
};

export default FreelancerPage;
