import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'redux/auth/operations';

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(signUp(newUser))
      .unwrap()
      .then(() => navigate('/login'));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <TextField
          label="Name"
          name="name"
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3, mt: 2 }}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
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
          Sign Up
        </Button>
      </form>
    </>
  );
};
