import React from 'react';
import { Freelancer } from './types';


interface Props {
  freelancers: Freelancer[];
  handleSort: (column: string) => void;
}

const FreelancerTable: React.FC<Props> = ({ freelancers, handleSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('jobTitle')}>Job Title</th>
          <th onClick={() => handleSort('location')}>Location</th>
          <th onClick={() => handleSort('email')}>Email</th>
        </tr>
      </thead>
      <tbody>
        {freelancers.map((freelancer) => (
          <tr key={freelancer.id}>
            <td>{freelancer.name}</td>
            <td>{freelancer.jobTitle}</td>
            <td>{freelancer.location}</td>
            <td>{freelancer.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FreelancerTable;
