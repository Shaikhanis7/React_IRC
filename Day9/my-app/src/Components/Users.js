import React, { useState, useEffect } from 'react';
import { deleteUser, getUser, addUser, editUser } from '../services/Api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
  });
  const [editingUser, setEditingUser] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getUser();
      setUsers(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);
      if (res.status === 200) {
        alert('User deleted');
        fetchData();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await addUser(newUser);
      if (res.status === 201) {
        alert('User added');
        setNewUser({
          username: '',
          password: '',
        });
        fetchData();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditUser = async (editedUser) => {
    try {
      const res = await editUser(editedUser);
      if (res.status === 200) {
        alert('User updated');
        setEditingUser(null);
        fetchData();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={handleAddUser}>
        <label>
          Username:
          <input
            type="text"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            required
          />
        </label>
        <button type="submit">Add User</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                {editingUser === user.id ? (
                  <button
                    className="edit-btn"
                    onClick={() => handleEditUser({ id: user.id, ...newUser })}
                  >
                    Save
                  </button>
                ) : (
                  <button className="edit-btn" onClick={() => setEditingUser(user.id)}>
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button className="del-btn" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
