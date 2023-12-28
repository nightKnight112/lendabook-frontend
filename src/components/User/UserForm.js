//User Registration on website only

import React, { useState } from 'react';
import { createUser } from '../../services/api';
import { TextField, Button, Typography, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const UserForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [total, setTotal] = useState('');
  const [rating, setRating] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must contain at least 10 characters, including at least one letter and one digit.'
      );
      return;
    }

    const user = {
      userName,
      email,
      location,
      phoneNo,
      password,
      status,
      total,
      rating,
    };

    try {
      const createdUser = await createUser(user);
      console.log('User created:', createdUser);
      // Handle success, e.g., show a success message or redirect to another page
      setSuccess(true);
    } catch (error) {
      console.log('Failed to create user', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            type="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Total"
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>

      {/* Render password validation error */}
      {passwordError && <Typography variant="body2" color="error">{passwordError}</Typography>}

      <Grid container justifyContent="center">
        <Grid item>
          <Button type="submit" variant="contained" color={success ? 'secondary' : 'primary'} endIcon={<SendIcon />} >
          {success ? 'User Created, Please Login Now' : 'Register User'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
