// UserList.tsx

import React, { useState, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
  id: number;
  username: string;
  jobRole: string;
  project: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<User>({
    id: 0,
    username: '',
    jobRole: '',
    project: '',
  });
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addUser = () => {
    if (formData.username && formData.jobRole && formData.project) {
      setUsers([...users, { ...formData, id: Date.now() }]);
      // Clear the form data after adding the user
      setFormData({
        id: 0,
        username: '',
        jobRole: '',
        project: '',
      });
      // Toggle form visibility
      setShowForm(!showForm);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="container mt-5">
      <h2>User List</h2>

      {showForm && (
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobRole">Job Role:</label>
            <input
              type="text"
              className="form-control"
              id="jobRole"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="project">Project:</label>
            <input
              type="text"
              className="form-control"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={addUser}>
            Add User
          </button>
        </form>
      )}

      <ul className="list-group mt-3">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{user.username}</strong> - {user.jobRole} - {user.project}
            </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
