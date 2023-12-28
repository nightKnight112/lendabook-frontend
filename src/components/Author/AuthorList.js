import React, { useState } from 'react';
import { 
    getAuthors, 
    getAuthorByName,
    getAllBooksByAuthor
} from '../../services/api';
import { TextField, Button, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllAuthors = () => {
  const [authors, setAuthors] = useState([]);

  const handleGetAuthors = async () => {
    const data = await getAuthors();
    setAuthors(data);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'Name', headerName: 'Author Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field:'no', headerName: 'No Of Books Available', width:100},
  ];
  
  const rows = authors.map((author) => ({
    id: author.id,
    Name: author.name,
    description: author.bio,
    no: author.no
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get All Authors</Typography>
      <Box sx={{ height: 300, width: '40%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button variant="contained" color="primary" onClick={handleGetAuthors} sx={{mt: 2}}>
        Get All Authors
      </Button>
    </div>
  );
};

const GetAuthorByName = () => {
  const [input, setInput] = useState('');
  const [authors, setAuthors] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetAuthorByName = async () => {
    const data = await getAuthorByName(input);
    setAuthors(data);
  };

  const columns = [
    { field: 'id', headerName: 'Author Id', width: 150 },
    { field: 'Name', headerName: 'Author Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field:'no', headerName: 'No Of Books Available', width:100},
  ];
  
  const rows = authors.map((author) => ({
    id: author.id,
    Name: author.name,
    description: author.bio,
    no: author.no
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get Author by Name</Typography>
      <TextField
        label="Enter Name"
        value={input}
        onChange={handleInputChange}
        sx={{mt: 2}}
      />
      <Box sx={{ height: 300, width: '40%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetAuthorByName}
        disabled={!input}
        sx={{mt: 2, mb: 2}}
      >
        Get Author by Name
      </Button>
    </div>
  );
};

const GetAllBooksByAuthor = () => {

  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetAllBooksByAuthor = async() => {
    const data = await getAllBooksByAuthor(input);
    setBooks(data);
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
    { field: 'copies', headerName: 'No Of Copies', width:50},
    { field:'authors', headerName: 'Authors', width:150}
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
    copies: book.noOfCopies,
    authors: book.authors.map((author) => author.name).join(", ")
  }));

  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get All Books By Author</Typography>
      <TextField label="Enter Author Name" value={input} onChange={handleInputChange} sx={{mt: 2}} required />
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetAllBooksByAuthor}
        disabled={!input}
        sx={{mt: 2, mb: 2}}
      >
        Get All Books By Author
      </Button>
    </div>
  );

};

export const GetAuthorFuncAdmin = () => {
  return(
    <div>
      <GetAllAuthors />
    </div>
  );
};

export const GetAuthorFuncUser = () => {
  return(
    <div>
      <GetAuthorByName />
      <GetAllBooksByAuthor />
    </div>
  );
};