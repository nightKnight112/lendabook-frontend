import { 
    getCommunities,
    getCommunityByName,
    getCommunityByTopic,
    getCommunityByRating
 } from '../../services/api';
import React, { useState } from 'react';
import { Button, Typography, TextField, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllCommunities = () => {
  const [communities, setCommunities] = useState([]);

  const handleGetCommunities = async () => {
    const data = await getCommunities();
    setCommunities(data);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'comName', headerName: 'Community Name', width: 150 },
    { field: 'topic', headerName: 'Topic', width:70},
    { field: 'description', headerName: 'Description', width: 150 },
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
      <Typography variant="h4" sx={{mt: 2}}>Get All Communities</Typography>
      <Box sx={{ height: 300, width: '40%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button variant="contained" color="primary" onClick={handleGetCommunities} sx={{mt: 2}}>
        Get All Communities
      </Button>
    </div>
  );
};

const GetCommunityByName = () => {
  const [input, setInput] = useState('');
  const [communities, setCommunities] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetCommunityByName = async () => {
    const data = await getCommunityByName(input);
    setCommunities(data);
  };

  const columns = [
    { field: 'Id', headerName: 'Community Id', width: 150 },
    { field: 'comName', headerName: 'Community Name', width: 150 },
    { field: 'topic', headerName: 'Topic', width:70},
    { field: 'description', headerName: 'Description', width: 150 },
    { field:'no', headerName: 'No Of Members', width:100},
    { field:'rating', headerName: 'Min Rating Required', width:100 }
  ];
  
  const rows = communities.map((community) => ({
    Id: community.communityId,
    comName: community.communityName,
    topic: community.communityTopic,
    description: community.communityDescription,
    no: community.noOfMembers,
    rating: community.ratingReqToJoin
  }));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography variant="h4" sx={{mt: 2}}>Get Community by Name</Typography>
      <TextField label="Enter Name" value={input} onChange={handleInputChange}  sx={{mt: 2}}/>
      <Box sx={{ height: 300, width: '40%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetCommunityByName}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get Community by Name
      </Button>
    </div>
  );
};

const GetCommunityByTopic = () => {
  const [input, setInput] = useState('');
  const [communities, setCommunities] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetCommunityByTopic = async () => {
    const data = await getCommunityByTopic(input);
    setCommunities(data);
  };

  const columns = [
    { field: 'id', headerName: 'Community Id', width: 150 },
    { field: 'comName', headerName: 'Community Name', width: 150 },
    { field: 'topic', headerName: 'Topic', width:70},
    { field: 'description', headerName: 'Description', width: 150 },
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
      <Typography variant="h4" sx={{mt: 2}}>Get Community by Topic</Typography>
      <TextField label="Enter Topic" value={input} onChange={handleInputChange} sx={{mt: 2}} />
      <Box sx={{ height: 300, width: '40%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetCommunityByTopic}
        disabled={!input}
        sx={{mt: 2}}
      >
        Get Community by Topic
      </Button>
    </div>
  );
};

const GetCommunityByRating = () => {
  const [input, setInput] = useState('');
  const [communities, setCommunities] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGetCommunityByRating = async () => {
    const data = await getCommunityByRating(input);
    setCommunities(data);
  };
  const columns = [
    { field: 'id', headerName: 'Community Id', width: 150 },
    { field: 'comName', headerName: 'Community Name', width: 150 },
    { field: 'topic', headerName: 'Topic', width:70},
    { field: 'description', headerName: 'Description', width: 150 },
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
      <Typography variant="h4" sx={{mt: 2}}>Get Community by Rating</Typography>
      <TextField label="Enter Rating" value={input} onChange={handleInputChange} sx={{mt: 2}}/>
      <Box sx={{ height: 300, width: '40%', mt: 2 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetCommunityByRating}
        disabled={!input}
        sx={{mt: 2, mb: 2}}
      >
        Get Community by Rating
      </Button>
    </div>
  );
};

export const GetCommunityFuncAdmin = () => {
  return(
    <div>
      <GetAllCommunities />
    </div>
  );
};

export const GetCommunityFuncUser = () => {
  return(
    <div>
      <GetAllCommunities />
      <GetCommunityByName />
      <GetCommunityByTopic />
      <GetCommunityByRating />
    </div>
  );
};