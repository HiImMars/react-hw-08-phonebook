import {
  AppBar,
  Box,
  Button,
  Container,
  createTheme,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const theme = createTheme({
  palette: {
    primary: {
      main: '#844d36',
      contrastText: '#8ad0ff',
    },
  },
});

const pages = ['Home', 'Contacts', 'SignUp', 'UserMenu', 'Login'];

export const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ mb: 10 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              iPhonebook
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page =>
                  isLoggedIn && page.toLowerCase() === 'login' ? (
                    <MenuItem key={page} onClick={handleLogOut}>
                      <Typography textAlign="center">Log Out</Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <NavLink
                        to={
                          page.toLowerCase() === 'home'
                            ? '/'
                            : `/${page.toLowerCase()}`
                        }
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </NavLink>
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              iPhonebook
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page =>
                isLoggedIn && page.toLowerCase() === 'login' ? (
                  <Button
                    key={page}
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
                ) : (
                  <NavLink
                    key={page}
                    to={
                      page.toLowerCase() === 'home'
                        ? '/'
                        : `/${page.toLowerCase()}`
                    }
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                )
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
