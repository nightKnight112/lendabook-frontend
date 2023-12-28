import React, { useEffect, useRef, useState } from 'react';
import {deleteUser, deleteAuthor, 
    deleteBook, deleteCommunity,
  removeUserFromCommunity, deleteAuthorFromABook
} from '../../services/api';
import { useAuthContext } from '../../AuthContext';
import { Typography, TextField, Button, Box} from '@mui/material';

const AdminDeleteUser = () => {
  
    const { userIdentity } = useAuthContext();
    const once = useRef(false);
    useEffect(() => {
      if (!once.current)
        if (!userIdentity.token) {
          console.log("Login as admin to access this route");
          // navigate to login page
          // navigate("/login");
        }
      return () => {
        once.current = true;
      }
    }, [userIdentity]);
  
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleInputChange = (e) => {
      setUserId(e.target.value);
    };
  
    const handleDeleteUser = async (e) => {
      e.preventDefault();
  
      try {
        const response = await deleteUser(userId);
        console.log('User deleted successfully:', response.data);
        setUserId('');
        setError('');
        setSuccess(true);
      } catch (error) {
        console.log('Error deleting user', error);
        setError('Error deleting user');
      }
    };
  
    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h4" sx={{ mt: 2 }}>Delete User</Typography>
    <Box component="form" onSubmit={handleDeleteUser} sx={{ mt: 2 }}>
      <TextField
        label="User ID"
        type="text"
        name="userId"
        value={userId}
        onChange={handleInputChange}
        required
        sx={{ mb: 2 }}
      />
  
      {error && <Typography variant="body2" color="error" sx={{ mb: 2 }}>{error}</Typography>}
      <Box display="flex" justifyContent="center">
      <Button variant="contained" type="submit" sx={{ bgcolor: success ? 'green' : undefined }}>
        Delete
      </Button>
      </Box>
    </Box>
  </Box>
    );
};
const AdminDeleteAuthorsFromABook = () => {
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleBookNameChange = (event) => {
      setBookName(event.target.value);
    };
  
    const handleAuthorNameChange = (event) => {
      setAuthorName(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await deleteAuthorFromABook(bookName, authorName);
        // Handle successful update, e.g., show a success message or redirect
        setSuccess(true);
      } catch (error) {
        console.log('Error updating authors for book:', error);
        // Handle error, e.g., show an error message
      }
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5
        }}
      >
        <Typography variant="h4">Admin Deletes Authors from a Book</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
        >
          <TextField
            label="Book Name"
            type="text"
            value={bookName}
            onChange={handleBookNameChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Author Name"
            type="text"
            value={authorName}
            onChange={handleAuthorNameChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant={success ? 'contained' : 'outlined'} sx={{ mb: 2 }}>
            Delete Authors in Book
          </Button>
        </Box>
      </Box>
    );
};
const AdminDeleteAuthor = () => {
    const [authorId, setAuthorId] = useState('');
  
    const handleInputChange = (event) => {
      setAuthorId(event.target.value);
    };
  
    const[success, setSuccess] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await deleteAuthor(authorId);
        // Handle successful deletion, e.g., show a success message or redirect
        setSuccess(true);
      } catch (error) {
        console.log('Error deleting author:', error);
        // Handle error, e.g., show an error message
      }
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{mt:2}}>Admin Delete Author</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
        >
          <TextField
            label="Author ID"
            type="text"
            value={authorId}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color={success ? 'error' : 'primary'} sx={{ mb: 2 }}>
          {success ? "Deleted" : "Delete Author"}
          </Button>
        </Box>
      </Box>
    );
};
const AdminDeleteBook = () => {
    const [bookId, setBookId] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleInputChange = (event) => {
      setBookId(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await deleteBook(bookId);
        // Handle successful deletion, e.g., show a success message or redirect
        setSuccess(true);
      } catch (error) {
        console.log('Error deleting book:', error);
        // Handle error, e.g., show an error message
      }
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mt: 2 }}>Admin Delete Book</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
        >
          <TextField
            label="Book ID"
            type="text"
            value={bookId}
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color={success ? 'error' : 'primary'} sx={{ mb: 2 }}>
            {success ? "Deleted" : "Delete Book"}
          </Button>
        </Box>
      </Box>
    );
};
const AdminDeleteCommunity = () => {
    const [communityId, setCommunityId] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleInputChange = (event) => {
      setCommunityId(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await deleteCommunity(communityId);
        // Handle successful deletion, e.g., show a success message or redirect
        setSuccess(true);
      } catch (error) {
        console.error('Failed to delete community:', error);
        // Handle error, e.g., show an error message
      }
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mt: 2 }}>Admin Delete Community</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
        >
          <TextField
            label="Community ID"
            type="text"
            value={communityId}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color={success ? 'error' : 'primary'} sx={{ mb: 2 }}>
            {success ? "Deleted" : "Delete Community"}
          </Button>
        </Box>
      </Box>
    );
};
const AdminDeleteUserFromCommunity = () => {
    const [userId, setUserId] = useState('');
    const [communityId, setCommunityId] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleUserInputChange = (event) => {
      setUserId(event.target.value);
    };
  
    const handleCommunityInputChange = (event) => {
      setCommunityId(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await removeUserFromCommunity(userId, communityId);
        // Handle successful removal, e.g., show a success message or redirect
        setSuccess(true);
      } catch (error) {
        console.log('Failed to delete user from community:', error);
        // Handle error, e.g., show an error message
      }
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mt: 2 }}>Admin Delete User from Community</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
        >
          <TextField
            label="User ID"
            type="text"
            value={userId}
            onChange={handleUserInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Community ID"
            type="text"
            value={communityId}
            onChange={handleCommunityInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color={success ? 'error' : 'primary'} sx={{ mb: 2 }}>
          {success ? "Removed" : "Remove User From Community"}
          </Button>
        </Box>
      </Box>
    );
};
export const AdminDeleteFunctionalities = () => {
    return(
        <>
            <AdminDeleteUser />
            <AdminDeleteAuthor />
            <AdminDeleteBook />
            <AdminDeleteCommunity />
            <AdminDeleteAuthorsFromABook />
            <AdminDeleteUserFromCommunity />
        </>
    );
};