//all the user get functions merged together

import {
  getUsers,
  getUserByName,
  getUserByLocation,
  getUserByRating,
  getAllCommunitiesJoinedByUser,
  getAllBooksDonatedByUser
} from '../../services/api';

import React, { useState } from 'react';
import { Button, Typography, TextField, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'userName', headerName: 'User Name', width: 150 },
    { field: 'email', headerName: 'Email', width:150},
    { field: 'location', headerName: 'Location', width: 100 },
    { field:'phone', headerName: 'Phone Number', width:100},
    { field:'password', headerName: 'Password', width:100 },
    { field: 'status', headerName: 'Active Status', width:75 },
    { field:'total', headerName: 'No of Books Donated', width:100},
    { field: 'rating', headerName: 'User Rating', width:50}
  ];
  
  const rows = users.map((user) => ({
    id: user.userId,
    userName: user.userName,
    email: user.email,
    location: user.location,
    phone: user.phoneNo,
    password: user.password,
    status: user.status,
    total: user.total,
    rating: user.rating
  }));

  const handleGetUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
    <Typography variant="h4" sx={{mt: 2}}>Get All Users</Typography>
    <Box sx={{ height: 300, width: '50%', mt: 2 }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
    <Button variant="contained" color="primary" onClick={handleGetUsers} sx={{ mt: 2 }}>
      Get All Users
    </Button>
  </div>
  );
};

const GetUserByName = () => {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'userName', headerName: 'User Name', width: 150 },
    { field: 'email', headerName: 'Email', width:150},
    { field: 'location', headerName: 'Location', width: 100 },
    { field:'phone', headerName: 'Phone Number', width:100},
    { field: 'status', headerName: 'Active Status', width:75 },
    { field:'total', headerName: 'No of Books Donated', width:100},
    { field: 'rating', headerName: 'User Rating', width:50}
  ];
  
  const rows = users.map((user) => ({
    userId: user.userId,
    userName: user.userName,
    email: user.email,
    location: user.location,
    phone: user.phoneNo,
    status: user.status,
    total: user.total,
    rating: user.rating
  }));

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetUserByName = async () => {
    const data = await getUserByName(input);
    setUsers(data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4">Get User by Name</Typography>
      <TextField
        label="Enter Name"
        value={input}
        onChange={handleInputChange}
      />
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetUserByName}
        disabled={!input}
      >
        Get User by Name
      </Button>
    </div>
  );
};

const GetUserByLocation = () => {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetUserByLocation = async () => {
    const data = await getUserByLocation(input);
    setUsers(data);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'userName', headerName: 'User Name', width: 150 },
    { field: 'email', headerName: 'Email', width:150},
    { field: 'location', headerName: 'Location', width: 100 },
    { field:'phone', headerName: 'Phone Number', width:100},
    { field: 'status', headerName: 'Active Status', width:75 },
    { field:'total', headerName: 'No of Books Donated', width:100},
    { field: 'rating', headerName: 'User Rating', width:50}
  ];
  
  const rows = users.map((user) => ({
    id: user.userId,
    userName: user.userName,
    email: user.email,
    location: user.location,
    phone: user.phoneNo,
    status: user.status,
    total: user.total,
    rating: user.rating
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get User by Location</Typography>
      <TextField
        label="Enter Location"
        value={input}
        onChange={handleInputChange}
        sx={{mt: 2}}
      />
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetUserByLocation}
        disabled={!input}
        sx={{mt: 2, mb:2}}
      >
        Get User by Location
      </Button>
    </div>
  );
};

const GetUserByRating = () => {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetUserByRating = async () => {
    const data = await getUserByRating(input);
    setUsers(data);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'userName', headerName: 'User Name', width: 150 },
    { field: 'email', headerName: 'Email', width:150},
    { field: 'location', headerName: 'Location', width: 100 },
    { field:'phone', headerName: 'Phone Number', width:100},
    { field: 'status', headerName: 'Active Status', width:75 },
    { field:'total', headerName: 'No of Books Donated', width:100},
    { field: 'rating', headerName: 'User Rating', width:50}
  ];
  
  const rows = users.map((user) => ({
    id: user.userId,
    userName: user.userName,
    email: user.email,
    location: user.location,
    phone: user.phoneNo,
    status: user.status,
    total: user.total,
    rating: user.rating
  }));


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get User by Rating</Typography>
      <TextField
        label="Enter Rating"
        value={input}
        onChange={handleInputChange}
        sx={{mt: 2}}
      />
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetUserByRating}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get User by Rating
      </Button>
    </div>
  );
};

const GetAllCommunitiesJoinedByUser = () => {
  const [input, setInput] = useState('');
  const [communities, setCommunities] = useState([]);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetAllCommunitiesJoinedByUser = async () => {
    const data = await getAllCommunitiesJoinedByUser(input);
    setCommunities(data);
    setUsers([]);
    setBooks([]);
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'comName', headerName: 'Community Name', width: 150 },
    { field: 'topic', headerName: 'Topic', width:150},
    { field: 'description', headerName: 'Description', width: 100 },
    { field:'no', headerName: 'No Of Members', width:100},
    { field:'rating', headerName: 'Min Rating Required', width:100 }
  ];
  
  const rows = communities.map((community) => ({
    id: community.communityId,
    comName: community.communityName,
    topic: community.communityTopic,
    description: community.communityDescription,
    no: community.noOfMembers,
    rating: community.ratingReqToJoin
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>
        Get All Communities Joined by User
      </Typography>
      <TextField
        label="Enter User ID"
        value={input}
        onChange={handleInputChange}
        sx={{mt: 2}}
      />
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetAllCommunitiesJoinedByUser}
        disabled={!input}
        sx={{mt: 2, mb:2}}
      >
        Get All Communities Joined by User
      </Button>
    </div>
  );
};

const GetAllBooksDonatedByUser = () => {
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [communities, setCommunities] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetAllBooksDonatedByUser = async () => {
    const data = await getAllBooksDonatedByUser(input);
    setBooks(data);
    setUsers([]);
    setCommunities([]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'bookName', headerName: 'Book Name', width: 150 },
    { field: 'genre', headerName: 'Genre', width:150},
    { field: 'description', headerName: 'Description', width: 100 },
    { field:'isbn', headerName: 'ISBN', width:100},
    { field:'Bestseller', headerName: 'Bestseller', width:100 },
    { field: 'publicationYear', headerName: 'Publication Year', width:75 },
    { field:'available', headerName: 'Availability', width:100},
    { field: 'copies', headerName: 'No Of Copies', width:50}
  ];
  
  const rows = books.map((book) => ({
    id: book.id,
    bookName: book.bookName,
    genre: book.genre,
    description: book.description,
    isbn: book.isbn,
    Bestseller: book.isBestSeller,
    publicationYear: book.publicationYear,
    available: book.isAvailable,
    copies: book.noOfCopies
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get All Books Donated by User</Typography>
      <TextField
        label="Enter User ID"
        value={input}
        onChange={handleInputChange}
        sx={{mt: 2}}
      />
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetAllBooksDonatedByUser}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get All Books Donated by User
      </Button>
    </div>
  );
};

export const GetUserByAdmins = () => {
  return(
    <div>
      <GetAllUsers />
      <GetAllBooksDonatedByUser />
      <GetAllCommunitiesJoinedByUser />
    </div>
  );
};

export const GetFunctionsForUser = () => {
  return(
    <div>
      <GetUserByLocation />
      <GetUserByName />
      <GetUserByRating />
      <GetAllBooksDonatedByUser />
      <GetAllCommunitiesJoinedByUser />
    </div>
  );
};