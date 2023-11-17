import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
      <Button sx={{ my: 2, color: '#00385e', display: 'block' }}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Button>
      <Button
        onClick={handleLogOut}
        sx={{
          my: 2,
          color: 'white',
          backgroundColor: '#844d36',
          display: 'block',
        }}
      >
        Log Out
      </Button>
    </Box>
  );
};
