//User updating functionality for admin
import React, { useState } from 'react';
import {
  updateUser, createCommunity, createAuthor,
  updateCommunity, updateBook, updateAuthor, saveBook,
  updateAuthorsInABook
} from '../../services/api';
import { Typography, TextField, Button, Box, Checkbox } from '@mui/material';

export const AdminUpdateUser = () => {
  const [user, setUser] = useState({
    userId: '',
    userName: '',
    email: '',
    location: '',
    phoneNo: '',
    password: '',
    status: '',
    total: '',
    rating: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    if (user.password && !passwordRegex.test(user.password)) {
      setPasswordError(
        'Password must be at least 10 characters long and contain at least one letter and one number.'
      );
      return;
    }

    try {
      const response = await updateUser(user, user.userId);
      console.log('User updated successfully:', response.data);
      setUser({
        userId: '',
        userName: '',
        email: '',
        location: '',
        phoneNo: '',
        password: '',
        status: '',
        total: '',
        rating: '',
      });
      setPasswordError('');
    } catch (error) {
      console.log('Error updating user', error);
      throw error;
    }
  };

  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h4" sx={{ mt: 2 }}>Update User</Typography>
  <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: '400px', mt: 2 }}>
    <TextField
      required
      type="number"
      name="userId"
      label="User ID"
      onChange={handleChange}
      margin="normal"
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      type="text"
      name="userName"
      label="User Name"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      type="email"
      name="email"
      label="Email"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      type="text"
      name="location"
      label="Location"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      type="tel"
      name="phoneNo"
      label="Phone Number"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      type="password"
      name="password"
      label="Password"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    {passwordError && <Typography variant="body2" color="error">{passwordError}</Typography>}
    <TextField
      type="text"
      name="status"
      label="Status"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      type="number"
      name="total"
      label="Total"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      type="number"
      name="rating"
      label="Rating"
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <Box display="flex" justifyContent="center">
      <Button variant="contained" color="primary" type="submit" sx={{ mb: 2 }}>
        Update
      </Button>
    </Box>
  </Box>
</div>
  );
};
export const AdminCreateCommunity = () => {
  const [community, setCommunity] = useState({
    communityName: '',
    communityTopic: '',
    communityDescription: '',
    noOfMembers: 0,
    ratingReqToJoin: 0
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCommunity({
      ...community,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCommunity(community);
      console.log('Community created:', response.data);
      // Perform any necessary actions with the created community
      setSuccess(true);
    } catch (error) {
      console.log('Failed to create community', error);
      // Handle the error appropriately
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h4" sx={{ mt: 2}}>Create Community</Typography>
  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: '400px' }}>
    <TextField
      label="Community Name"
      type="text"
      name="communityName"
      value={community.communityName}
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
      required
    />
    <TextField
      label="Community Topic"
      type="text"
      name="communityTopic"
      value={community.communityTopic}
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
      required
    />
    <TextField
      label="Community Description"
      name="communityDescription"
      value={community.communityDescription}
      onChange={handleChange}
      multiline
      fullWidth
      rows={4}
      sx={{ mb: 2 }}
      required
    />
    <TextField
      label="Number of Members"
      type="number"
      name="noOfMembers"
      value={community.noOfMembers}
      onChange={handleChange}
      fullWidth
      sx={{ mb: 2 }}
    />
    <TextField
      label="Rating Required to Join"
      type="number"
      name="ratingReqToJoin"
      value={community.ratingReqToJoin}
      onChange={handleChange}
      fullWidth
      required
      sx={{ mb: 2 }}
    />
    <Box display="flex" justifyContent="center">
      <Button variant="contained" type="submit" sx={{ bgcolor: success ? 'green' : undefined }}>
        {success ? 'Created': 'Create'}
      </Button>
    </Box>
  </Box>
</Box>
  );
};
export const AdminCreateAuthor = () => {
  const [author, setAuthor] = useState({
    id: '',
    name: '',
    bio: '',
    no: 0
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAuthor(author);
      console.log('Author created:', response.data);
      // Perform any necessary actions with the created author
      setSuccess(true);
    } catch (error) {
      console.log('Error creating author', error);
      // Handle the error appropriately
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{mt: 2}}>Create Author</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: '400px' }}>
        <TextField
          label="ID"
          type="text"
          name="id"
          value={author.id}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Name"
          type="text"
          name="name"
          value={author.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Bio"
          name="bio"
          value={author.bio}
          onChange={handleChange}
          multiline
          fullWidth
          rows={4}
          sx={{ mb: 2 }}
        />
        <TextField
          label="No"
          type="number"
          name="no"
          value={author.no}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Box display="flex" justifyContent="center">
        <Button variant="contained" type="submit" sx={{ bgcolor: success ? 'green' : undefined }}>
          {success ? 'Created!' : 'Create'}
        </Button>
        </Box>
      </Box>
    </Box>
  );
};
export const AdminCreateBook = () => {
  const [book, setBook] = useState({
    bookName: '',
    genre: '',
    description: '',
    isbn: '',
    isBestSeller: false,
    publicationYear: 0,
    isAvailable: false,
    noOfCopies: 0,
    authors: [
      {
        id: '',
        name: '',
        bio: '',
        no: 0,
      },
    ],
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e, index) => {

    const { name, value } = e.target;

    console.log(name, value);

    const fieldNameParts = name.split('-');

    const fieldName = fieldNameParts[0];

   

    if (fieldName === 'authorId' || fieldName === 'authorName' || fieldName === 'authorBio' || fieldName === 'authorNo') {

      const authorIndex = Number(fieldNameParts[1]);

      const updatedAuthors = [...book.authors];

      updatedAuthors[authorIndex][name] = value;

      setBook({ ...book, authors: updatedAuthors });

    } else {

      setBook({ ...book, [name]: value });

    }

  };

  const handleAddAuthor = () => {
    setBook({
      ...book,
      authors: [...book.authors, { id: '', name: '', bio: '', no: 0 }],
    });
  };

  const handleRemoveAuthor = (index) => {
    const updatedAuthors = [...book.authors];
    updatedAuthors.splice(index, 1);
    setBook({ ...book, authors: updatedAuthors });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveBook(book);
      console.log('Book saved:', response.data);
      // Perform any necessary actions with the saved book
      setSuccess(true);
    } catch (error) {
      console.log('Error saving book:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Create Book
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: '400px' }}>
        <TextField
          label="Book Name"
          type="text"
          name="bookName"
          value={book.bookName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Genre"
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={book.description}
          onChange={handleChange}
          multiline
          fullWidth
          rows={4}
          sx={{ mb: 2 }}
        />
        <TextField
          label="ISBN"
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Checkbox
          checked={book.isBestSeller}
          onChange={() => setBook({ ...book, isBestSeller: !book.isBestSeller })}
          name="isBestSeller"
          color="primary"
          sx={{ mb: 2 }}
        />
        <Typography variant="body1">Is Best Seller</Typography>
        <br />
        <TextField
          label="Publication Year"
          type="number"
          name="publicationYear"
          value={book.publicationYear}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Checkbox
          checked={book.isAvailable}
          onChange={() => setBook({ ...book, isAvailable: !book.isAvailable })}
          name="isAvailable"
          color="primary"
          sx={{ mb: 2 }}
        />
        <Typography variant="body1">Is Available</Typography>
        <br />
        <TextField
          label="Number of Copies"
          type="number"
          name="noOfCopies"
          value={book.noOfCopies}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Typography variant="h5" sx={{ mb: 2 }}>
          Authors:
        </Typography>
        {book.authors.map((author, index) => (
          <div key={index}>
            <TextField
          label="Author ID"
          type="text"
          name={`authorId-${index}`}
          value={author.id || ""}
          onChange={(e) => handleChange(e, index)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author Name"
          type="text"
          name={`authorName-${index}`}
          value={author.name}
          onChange={(e) => handleChange(e, index)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author Bio"
          name={`authorBio-${index}`}
          value={author.bio}
          onChange={(e) => handleChange(e, index)}
          multiline
          fullWidth
          rows={4}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author No"
          type="number"
          name={`authorNo-${index}`}
          value={author.no}
          onChange={(e) => handleChange(e, index)}
          fullWidth
          sx={{ mb: 2 }}
        />
            {index !== 0 && (
              <Button
                variant="outlined"
                onClick={() => handleRemoveAuthor(index)}
                sx={{ mb: 2 }}
              >
                Remove Author
              </Button>
            )}
            <br />
          </div>
        ))}
        <Button variant="outlined" onClick={handleAddAuthor} sx={{ mb: 2 }}>
          Add Author
        </Button>
        <br />
        <br />
        <Button variant="contained" type="submit" color={success ? 'success' : 'primary'}>
          {success ? 'Saved!' : 'Save'}
        </Button>
      </Box>
    </Box>
  );
};
export const AdminUpdateCommunity = () => {
  const [community, setCommunity] = useState({
    communityId: '',
    communityName: '',
    communityDescription: '',
    noOfMembers: '',
    ratingReqToJoin: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCommunity({
      ...community,
      [e.target.name]: e.target.value,
    });
  };

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateCommunity(community.communityId, community);
      console.log('Community updated successfully:', response.data);
      setCommunity({
        communityId: '',
        communityName: '',
        communityDescription: '',
        noOfMembers: '',
        ratingReqToJoin: '',
      });
      setError('');
      setSuccess(true);
    } catch (error) {
      console.log('Failed to update community', error);
      setError('Failed to update community');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h4">Update Community</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
      >
        <TextField
          label="Community ID"
          type="text"
          name="communityId"
          value={community.communityId}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Community Name"
          type="text"
          name="communityName"
          value={community.communityName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Community Description"
          name="communityDescription"
          value={community.communityDescription}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Number of Members"
          type="number"
          name="noOfMembers"
          value={community.noOfMembers}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Rating Required to Join"
          type="number"
          name="ratingReqToJoin"
          value={community.ratingReqToJoin}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        {error && <Typography className="error" variant="body2">{error}</Typography>}
        <Button
          variant="contained"
          type="submit"
          color={success ? 'success' : 'primary'}
          sx={{ mb: 2 }}
        >
          {success ? 'Updated!' : 'Update'}
        </Button>
      </Box>
    </Box>
  );
};
export const AdminUpdateBooks = () => {
  const [book, setBook] = useState({
    id: '',
    bookName: '',
    genre: '',
    description: '',
    isbn: '',
    isBestSeller: false,
    publicationYear: '',
    isAvailable: false,
    noOfCopies: 0
  });

  const[success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBook(book, book.id);
      // Handle successful update, e.g., show a success message or redirect
      setSuccess(true);
    } catch (error) {
      console.log('Error updating book:', error);
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
    <Typography variant="h4" sx={{ mt: 2 }}>Admin Update Books</Typography>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
    >
      <TextField
        label="Book ID"
        type="text"
        name="id"
        value={book.id}
        onChange={handleInputChange}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Book Name"
        type="text"
        name="bookName"
        value={book.bookName}
        onChange={handleInputChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Genre"
        type="text"
        name="genre"
        value={book.genre}
        onChange={handleInputChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Description"
        type="text"
        name="description"
        value={book.description}
        onChange={handleInputChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="ISBN"
        type="text"
        name="isbn"
        value={book.isbn}
        onChange={handleInputChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Checkbox
          checked={book.isBestSeller}
          onChange={() => setBook({ ...book, isBestSeller: !book.isBestSeller })}
          name="isBestSeller"
          color="primary"
          sx={{ mb: 2 }}
        />
      <Typography variant="body1">Bestseller</Typography>
      <br />
      <TextField
        label="Publication Year"
        type="text"
        name="publicationYear"
        value={book.publicationYear}
        onChange={handleInputChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Checkbox
          checked={book.isAvailable}
          onChange={() => setBook({ ...book, isAvailable: !book.isAvailable })}
          name="isAvailable"
          color="primary"
          sx={{ mb: 2 }}
        />
      <Typography variant="body1">Availability</Typography>
      <br />
      <TextField
        label="Number of Copies"
        type="number"
        name="noOfCopies"
        value={book.noOfCopies}
        onChange={handleInputChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color={success ? 'success' : 'primary'} sx={{ mb: 2 }}>
        {success ? 'Updated!' : 'Update'}
      </Button>
    </Box>
  </Box>
  );
};
export const AdminUpdateAuthorsInABook = () => {
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
      await updateAuthorsInABook(bookName, authorName);
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
      <Typography variant="h4">Admin Adds Authors in a Book</Typography>
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
          Update Authors in Book
        </Button>
      </Box>
    </Box>
  );
};
export const AdminUpdateAuthors = () => {
  const [author, setAuthor] = useState({
    id: '',
    name: '',
    bio: '',
    no: ''
  });

  const[success, setSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAuthor({ ...author, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateAuthor(author.id, author);
      // Handle successful update, e.g., show a success message or redirect
      setSuccess(true);
    } catch (error) {
      console.log('Error updating author:', error);
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
      <Typography variant="h4" sx={{ mt: 2 }}>Admin Update Authors</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2, maxWidth: '400px', textAlign: 'center' }}
      >
        <TextField
          label="Author ID"
          type="text"
          name="id"
          value={author.id}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author Name"
          type="text"
          name="name"
          value={author.name}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author Bio"
          type="text"
          name="bio"
          value={author.bio}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author Number"
          type="text"
          name="no"
          value={author.no}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color={success ? 'success' : 'primary'} sx={{ mb: 2 }}>
          {success ? "Updated!" : "Update"}
        </Button>
      </Box>
    </Box>
  );
};