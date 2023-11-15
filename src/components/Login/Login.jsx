import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    navigate('/contacts');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <TextField
          label="Email"
          name="email"
          //   onChange={e => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3, mt: 2 }}
          fullWidth
          //   value={email}
          //   error={emailError}
        />
        <TextField
          label="Password"
          name="password"
          //   onChange={e => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          //   value={password}
          //   error={passwordError}
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
