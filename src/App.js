import React, { useState } from 'react';
import { BrowserRouter as Router, Link as RouterLink, Route, Routes} from 'react-router-dom';
import './styles/Navbar.css';
import { UserForm } from './components/User/UserForm';
import { AddBooksByUser, AddUserToCommunity, DeleteBooksDonatedByUser, GetFunctionalities } from './components/User/UserFunctionalities';
import { UserLogin } from './components/Login/LoginForm';
import { AdminUpdateUser, AdminCreateCommunity, 
  AdminCreateAuthor, AdminCreateBook, AdminUpdateCommunity,
  AdminUpdateBooks, AdminUpdateAuthorsInABook, AdminUpdateAuthors, 
  } from './components/Admin/AdminFunctionalities';
import { UserCard } from './components/Login/UserCard';
import { AdminDeleteFunctionalities } from './components/Admin/AdminDeleteFunctionalities';
import { AdminSearchFunctionalities } from './components/Admin/AdminSearchFunctionalities';
import { AuthContextProvider } from './AuthContext';
import { EntityLogout } from './components/Login/Logout';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { AccountCircle, ExpandMore, 
  Logout, AdminPanelSettingsRounded, VerifiedUserOutlined} from '@mui/icons-material';


const Link = styled(RouterLink)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));


function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [userIdentity, setUserIdentity] = useState({
    role: localStorage.getItem("user-role") || '',
    token: localStorage.getItem("user-token") || ''
  });


  return (
    <Router>
      <AuthContextProvider value={{ userIdentity, setUserIdentity }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lend A Book
          </Typography>

          <Button component={Link} to="/" color="inherit">
            Home
          </Button>

          <Button component={Link} to="/login" color="inherit" disabled={(userIdentity.role === 'admin' || userIdentity.role === 'user')}>
            Login
          </Button>

          <Button component={Link} to="/registration" color="inherit" disabled={(userIdentity.role === 'admin' || userIdentity.role === 'user')}>
            Registration
          </Button>

          <Button
            color="inherit"
            startIcon={<AccountCircle />}
            endIcon={<ExpandMore />}
            onClick={handleClick}
            disabled={userIdentity.role === ''}
          >
            {userIdentity.role === 'admin' ? 'Admin' : 'User'}
          </Button>

          <Menu
            id="navbar-dropdown"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
          >


            {userIdentity.role === 'user' && (
              <MenuItem component={Link} to="/user/searchFunctionalities" onClick={handleClose}>
                <ListItemIcon>
                <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="User Search Functionalities" />
              </MenuItem>
            )}
            {userIdentity.role === 'user' && (
              <MenuItem component={Link} to="/userFunc/addBooks" onClick={handleClose}>
                <ListItemIcon>
                <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="User Donate Books" />
              </MenuItem>
            )}
            {userIdentity.role === 'user' && (
              <MenuItem component={Link} to="/userFunc/addCommunities" onClick={handleClose}>
                <ListItemIcon>
                <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="User Join Communities" />
              </MenuItem>
            )}
            {userIdentity.role === 'user' && (
              <MenuItem component={Link} to="/userFunc/deleteBooks" onClick={handleClose}>
                <ListItemIcon>
                <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="User Deletes Donated Books" />
              </MenuItem>
            )}




            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/admin/searchFunctionalities" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Search Functionalities" />
              </MenuItem>
            )}  

            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/updateUser" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Updates User" />
              </MenuItem>
            )}
            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/createCommunity" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Creates Community" />
              </MenuItem>
            )}
            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/createAuthor" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Creates Author" />
              </MenuItem>
            )}
            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/updateCommunity" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Updates Community" />
              </MenuItem>
            )}
            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/updateBooks" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Updates Book" />
              </MenuItem>
            )}
            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/updateAuthorsInABook" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Updates Author In a Book" />
              </MenuItem>
            )}
            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/updateAuthors" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Admin Updates Authors" />
              </MenuItem>
            )}
            {userIdentity.role === 'admin' && (
              <MenuItem component={Link} to="/adminFunc/deleteFunctionalities" onClick={handleClose}>
                <ListItemIcon>
                <AdminPanelSettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Delete Functionalities for Admin" />
              </MenuItem>
            )}
            {(userIdentity.role === 'admin' || userIdentity.role === 'user') && (
              <MenuItem component={Link} to="/userCard" onClick={handleClose}>
                <ListItemIcon>
                  <VerifiedUserOutlined />
                </ListItemIcon>
                <ListItemText primary="User Details" />
              </MenuItem>
            )}
            {(userIdentity.role === 'admin' || userIdentity.role === 'user') && (
              <MenuItem component={Link} to="/logout" onClick={handleClose}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </MenuItem>
            )}
            
          </Menu>
        </Toolbar>
      </AppBar>
      <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/admin/searchFunctionalities" element={<AdminSearchFunctionalities />} />
          <Route path="/user/searchFunctionalities" element={<GetFunctionalities />} />
          <Route path="/registration" element={<UserForm />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/logout" element={<EntityLogout />} />
          <Route path="/userCard" element={<UserCard />} />
          <Route path="/userFunc">
            <Route path="/userFunc/addBooks" element={<AddBooksByUser />} />
            <Route path="/userFunc/addCommunities" element={<AddUserToCommunity />} />
            <Route path="/userFunc/deleteBooks" element={<DeleteBooksDonatedByUser />} />
          </Route>
          <Route path="/adminFunc">
            <Route path="/adminFunc/updateUser" element={<AdminUpdateUser />} />
            <Route path="/adminFunc/createCommunity" element={<AdminCreateCommunity />} />
            <Route path="/adminFunc/createAuthor" element={<AdminCreateAuthor />} />
            <Route path="/adminFunc/createBook" element={<AdminCreateBook />} />
            <Route path="/adminFunc/updateCommunity" element={<AdminUpdateCommunity />} />
            <Route path="/adminFunc/updateBooks" element={<AdminUpdateBooks />} />
            <Route path="/adminFunc/updateAuthorsInABook" element={<AdminUpdateAuthorsInABook />} />
            <Route path="/adminFunc/updateAuthors" element={<AdminUpdateAuthors />} />
            <Route path="/adminFunc/deleteFunctionalities" element={<AdminDeleteFunctionalities />} />
          </Route>
       </Routes>
      </AuthContextProvider>
    </Router>
  );
}

function StarterPage() {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      }}
    >
      <Box sx={{ textAlign: 'center', color: 'white' }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Lend A Read
        </Typography>
        <Typography variant="body1" gutterBottom>
          Where Imagination Meets Generosity, One Page at a Time
        </Typography>
      </Box>
    </Box>
  );
}

export default Navbar;