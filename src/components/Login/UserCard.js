import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 8px;
  width: 300px;
  margin: auto;
  margin-top: 20px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const UserCard = () => {
  const userToken = localStorage.getItem('user-token');
  const userIsAuthorised = localStorage.getItem('user-is-authorized');
  const userRole = localStorage.getItem('user-role');
  const userId = localStorage.getItem('userId');
  const location = localStorage.getItem('userLocation');
  const activeStatus = localStorage.getItem('active-status');
  const password = localStorage.getItem('password');
  const email = localStorage.getItem('email');
  const noOfBooksDonated = localStorage.getItem('noOfBooksDonated');
  const noOfCommunitiesJoined = localStorage.getItem('noOfCommunitiesJoined');

  return (
    <>
    <StyledCard>
      <CardContent>
        <Typography variant="h5">{userToken}</Typography>
        <Typography variant="body1">Role: {userRole}</Typography>
        <Typography variant="body1">UserId: {userId}</Typography>
        <Typography variant="body1">Authorization validated: {userIsAuthorised}</Typography>
        <Typography variant="body1">Location: {location}</Typography>
        <Typography variant="body1">Active Profile: {activeStatus}</Typography>
        <Typography variant="body1">Password: {password}</Typography>
        <Typography variant="body1">Email: {email}</Typography>
        <Typography variant="body1">No Of Books Donated: {noOfBooksDonated}</Typography>
        <Typography variant="body1">No Of Communities Joined: {noOfCommunitiesJoined}</Typography>
      </CardContent>
    </StyledCard>
  </>
  );
};