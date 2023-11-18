import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Container fixed sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button sx={{ my: 2, color: '#00385e', display: 'block' }}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Button>
        <Button
          onClick={handleLogOut}
          sx={{
            my: 2,
            color: '#ff8a8a',
            backgroundColor: '#121212',
            display: 'block',
            '&:hover': { color: 'black', backgroundColor: '#8f8f8f' },
            '&:focus': { color: 'black', backgroundColor: '#8f8f8f' },
          }}
        >
          Log Out
        </Button>
      </Container>
      <Container fixed sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{ my: 7, color: '#00385e', display: 'block', fontSize: '24px' }}
        >
          <p>
            Welcome to your iPhonebook! Now you are able to use Contacts
            section!
          </p>
        </Button>
      </Container>
    </>
  );
};
