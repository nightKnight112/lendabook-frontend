// User login
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { loginUser } from '../../services/api';
import { useAuthContext } from '../../AuthContext';

export const UserLogin = () => {
  const { setUserIdentity } = useAuthContext();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async () => {
    const loginRequest = { userName, password, email };
    try {
      const response = await loginUser(loginRequest);

      // Handle the response as needed
      const role = response.userRole; // change namespace as needed
      const token = response.userName; // change namespace as needed
      const isAuthorised = response.isAuthorised;
      const id = response.userId;
      const location = response.user.location;
      const activeStatus = response.user.status;
      const password = response.user.password;
      const email = response.user.email;
      const noOfBooksDonated = response.user.books.length;
      const noOfCommuntiesJoined = response.user.communities.length;
      setUserIdentity({ role, token });

      localStorage.setItem("user-role", role);
      localStorage.setItem("user-token", token); // token is userName
      localStorage.setItem("user-is-authorized", isAuthorised);
      localStorage.setItem("userId", id); // id
      localStorage.setItem("userLocation", location); // location
      localStorage.setItem("active-status", activeStatus); // active status
      localStorage.setItem("password", password); // password
      localStorage.setItem("email", email); // email
      localStorage.setItem("noOfBooksDonated", noOfBooksDonated); // noOfBooksDonated
      localStorage.setItem("noOfCommunitiesJoined", noOfCommuntiesJoined); // noOfCommunitiesJoin



      console.log('Login successful:', response);
      setSuccess(true);
    } catch (error) {
      console.log('Failed to login user:', error);
      // Handle the error as needed
    }
  };

  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
    <TextField
      label="Username"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      margin="normal"
      required
    />
    <TextField
      label="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      margin="normal"
      required
    />
    <TextField
      label="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      margin="normal"
      required
    />
    <Button variant="contained" onClick={handleLogin}
     color={success ? 'secondary' : 'primary'}>
      {success ? 'Logged In' : 'Login'}</Button>
    </div>
  </div>
  );
};
