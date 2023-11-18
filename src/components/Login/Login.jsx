import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn, refreshUser } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(refreshUser());
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <TextField
          label="Email"
          name="email"
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3, mt: 2 }}
          fullWidth
        />
        <TextField
          label="Password"
          name="password"
          required
          variant="outlined"
          color="secondary"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Login
        </Button>
      </form>
      <small>
        Need an account? <Link to="/signup">Sign up here</Link>
      </small>
    </>
  );
};
