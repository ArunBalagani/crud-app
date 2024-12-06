import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const [users, setUsers] = useState([]);

  // Create a new user
  const handleSubmit = () => {
    axios.post('https://crud-app-7dn2.onrender.com/api/users', newUser)
      .then((res) => {
        console.log('User added:', res.data);
        setUsers([...users, res.data]);
        setNewUser({ name: '', email: '', password: '' });
      })
      .catch((err) => console.error(err));
  };

  // Fetch all users
  useEffect(() => {
    axios.get('https://crud-app-7dn2.onrender.com/api/users')
      .then((res) => {
        console.log('Fetched users:', res.data);
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management</h1>
        
        {/* User Form Section */}
        <div className="form-container">
          <div className="form-card">
            <input
              type="text"
              placeholder="Enter Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Enter Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>

        {/* User List Section */}
        <div className="list-container">
          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button className='btn btn-success'>View</button>
                      <button className='btn btn-info'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
