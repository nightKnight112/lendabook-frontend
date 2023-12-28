import React, { useState } from 'react';
import { useAuthContext } from '../../AuthContext';
import { Button, Grid } from '@mui/material';

export const EntityLogout = () => {
    const [isClicked, setIsClicked] = useState(false);
    const { setUserIdentity } = useAuthContext();
    const handleLogout = () => {
        setUserIdentity({role: '', token: ''});
        localStorage.clear();
        setIsClicked(true);
    };
    

    return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item>
        <Button
          onClick={handleLogout}
          variant="contained"
          color={isClicked ? 'secondary' : 'primary'}
        >
          {isClicked ? 'Logged Out' : 'Logout'}
        </Button>
      </Grid>
    </Grid>
    );
};
