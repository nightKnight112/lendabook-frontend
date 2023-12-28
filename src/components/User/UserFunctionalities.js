import React, { useState } from 'react';
import { addBooksByUser, addUserToCommunity, deleteBooksDonatedByUser } from '../../services/api'; // Adjust the file path if needed
import { Button, TextField, Typography, Box } from '@mui/material'; // Import Material-UI components
import { GetBookFunctionalitiesUser } from '../Book/BookList';
import { GetAuthorFuncUser } from '../Author/AuthorList';
import { GetFunctionsForUser } from './UserList';
import { GetCommunityFuncUser } from '../Community/CommunityList';

export const AddBooksByUser = () => {
  const [bookName, setBookName] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [isbn, setIsbn] = useState('');
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [publicationYear, setPublicationYear] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [authorBio, setAuthorBio] = useState('');
  const [userId, setUserId] = useState('');
  const [success, setSuccess] = useState(false);

  const handleAddBooksByUser = async () => {
    const book = {
      bookName: bookName,
      genre: genre,
      description: description,
      isbn: isbn,
      isBestSeller: isBestSeller,
      publicationYear: publicationYear,
      isAvailable: isAvailable,
      authors: [
        {
          name: authorName,
          bio: authorBio
        }
      ]
    };
    try {
      // Call addBooksByUser API function with the book object and userId
      const data = await addBooksByUser(book, userId, authorName);
      console.log('Book added by user:', data);
      setSuccess(true);
    } catch (error) {
      console.log('Failed to add book by user', error);
    }
  };

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      justifyContent: 'center',
      textAlign: 'center'
    }}
  >
    <Typography variant="h4" sx={{ mt: 2 }}>Add Books by User</Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        mt: 2
      }}
    >
      <TextField
        label="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Is Bestseller"
        value={isBestSeller}
        onChange={(e) => setIsBestSeller(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Publication Year"
        value={publicationYear}
        onChange={(e) => setPublicationYear(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Is Available"
        value={isAvailable}
        onChange={(e) => setIsAvailable(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Author Name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Author Bio"
        value={authorBio}
        onChange={(e) => setAuthorBio(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color={success ? 'success' : 'primary'}
        onClick={handleAddBooksByUser}
        fullWidth
        sx={{ mb: 2 }}
      >
        {success ? 'Added': 'Add Books'}
      </Button>
    </Box>
  </Box>
  );
};
export const AddUserToCommunity = () => {
  const [userId, setUserId] = useState('');
  const [communityName, setCommunityName] = useState('');
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleAddUserToCommunity = async () => {
    try {
      // Call addUserToCommunity API function with userId and communityId
      const data = await addUserToCommunity(userId, communityName);
      console.log('User added to community:', data);
      setSuccess(true);
    } catch (error) {
      console.log('Failed to add user to community', error);
      setFailure(true);
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
      <Typography variant="h4" sx={{ mt: 2 }}>Add User to Community</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          mt: 2
        }}
      >
        <TextField
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Community Name"
          value={communityName}
          onChange={(e) => setCommunityName(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color={success ? 'success' : 'primary'}
          onClick={handleAddUserToCommunity}
          fullWidth
          sx={{ mb: 2 }}
        >
          {success ? 'Added': 'Subscribe to Community'}
        </Button>
        {failure ? 'Rating insufficient to join community': 'Join Communities for Better Experience....'}
      </Box>
    </Box>
  );
};
export const DeleteBooksDonatedByUser = () => {
  const [userId, setUserId] = useState('');
  const [deletedBookId, setDeletedBookId] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDeleteBooksDonatedByUser = async () => {
    try {
      // Call deleteBooksDonatedByUser API function with userId, deletedBookId, and authorName
      const data = await deleteBooksDonatedByUser(userId, deletedBookId, authorName);
      console.log('Books deleted by user:', data);
      setSuccess(true);
    } catch (error) {
      console.log('Error deleting books by user', error);
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
      <Typography variant="h4" sx={{ mt: 2 }}>Delete Books Donated by User</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          mt: 2
        }}
      >
        <TextField
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Deleted Book ID"
          value={deletedBookId}
          onChange={(e) => setDeletedBookId(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color={success ? 'error' : 'primary'}
          onClick={handleDeleteBooksDonatedByUser}
          fullWidth
          sx={{ mb: 2 }}
        >
           {success ? 'Deleted': 'Delete Donated Books'}
        </Button>
      </Box>
    </Box>
  );
};
export const GetFunctionalities = () => {
  return(
    <>
      <GetFunctionsForUser />
      <GetCommunityFuncUser />
      <GetBookFunctionalitiesUser />
      <GetAuthorFuncUser />
    </>
  );
};