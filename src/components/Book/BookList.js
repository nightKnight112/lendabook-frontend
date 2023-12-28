import React, { useState } from 'react';
import { 
    getBooks,
    getBookByName,
    getBookByGenre, 
    getBookByBestseller, 
    getBookByISBN, 
    getBookByPublicationYear 
} from '../../services/api';
import {
  TextField,
  Button,
  Typography,
  Box
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllBooks = () => {
  const [books, setBooks] = useState([]);

  const handleGetBooks = async () => {
    const data = await getBooks();
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get All Books</Typography>
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button variant="contained" color="primary" onClick={handleGetBooks} sx={{mt: 2, mb: 2}}>
        Get All Books
      </Button>
    </div>
  );
};

const GetBookByName = () => {
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetBookByName = async () => {
    const data = await getBookByName(input);
    setBooks(data);
  };
  const columns = [
    { field: 'id', headerName: 'Book Id', width: 150 },
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


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get Book by Name</Typography>
      <TextField label="Enter Book Name" value={input} onChange={handleInputChange} sx={{mt: 2}} />
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetBookByName}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get Book by Name
      </Button>
    </div>
  );
};

const GetBookByGenre = () => {
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetBookByGenre = async () => {
    const data = await getBookByGenre(input);
    setBooks(data);
  };

  const columns = [
    { field: 'id', headerName: 'Book Id', width: 150 },
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get Book by Genre</Typography>
      <TextField label="Enter Genre" value={input} onChange={handleInputChange} sx={{mt: 2}}/>
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetBookByGenre}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get Book by Genre
      </Button>
    </div>
  );
};

const GetBookByBestseller = () => {
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetBookByBestseller = async () => {
    const data = await getBookByBestseller(input);
    setBooks(data);
  };

  const columns = [
    { field: 'id', headerName: 'Book Id', width: 150 },
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get Bestselling Books</Typography>
      <TextField
        label="Enter Bestseller Rank"
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
        onClick={handleGetBookByBestseller}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get Bestselling Books
      </Button>
    </div>
  );
};

const GetBookByISBN = () => {
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetBookByISBN = async () => {
    const data = await getBookByISBN(input);
    setBooks(data);
  };
  const columns = [
    { field: 'id', headerName: 'Book Id', width: 150 },
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get Book by ISBN</Typography>
      <TextField label="Enter ISBN" value={input} onChange={handleInputChange} sx={{mt: 2}}/>
      <Box sx={{ height: 300, width: '50%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetBookByISBN}
        disabled={!input}
        sx={{mt: 2, mb:2}}
      >
        Get Book by ISBN
      </Button>
    </div>
  );
};

const GetBookByPublicationYear = () => {
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetBookByPublicationYear = async () => {
    const data = await getBookByPublicationYear(input);
    setBooks(data);
  };

  const columns = [
    { field: 'id', headerName: 'Book Id', width: 150 },
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get Book by Publication Year</Typography>
      <TextField
        label="Enter Publication Year"
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
        onClick={handleGetBookByPublicationYear}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get Book by Publication Year
      </Button>
    </div>
  );
};

export const GetBookFunctionalitiesAdmin = () => {
  return(
    <div>
      <GetAllBooks />
    </div>
  );
};

export const GetBookFunctionalitiesUser = () => {
  return(
    <div>
      <GetBookByName />
      <GetBookByGenre />
      <GetBookByBestseller />
      <GetBookByPublicationYear />
      <GetBookByISBN />
    </div>
  )
}