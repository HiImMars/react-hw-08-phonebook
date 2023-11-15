import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <>
      <form>
        <h2>Log in</h2>
        <TextField
          label="Email"
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
