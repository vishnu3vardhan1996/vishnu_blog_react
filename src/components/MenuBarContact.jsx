import React from 'react';
import { Link } from 'react-router-dom';
// ######### Imports from Material UI ###########
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// ###### Typical Imports related for Project ########
import axios from 'axios';
import '../App.css';

const myBlog = {
  name: "MY BLOGS",
  url: "/allblogs"
};

const pages = [myBlog];

function MenuBarContact() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Customizing the Palatte colors and using "ThemeProvider" component from Material UI to implement in the UI.

  const theme = createTheme({
    palette: {
      primary: {
        main: '#595959',
      },

      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },

      custom: {
        light: '#ffa726',
        main: '#f57c00',
        dark: '#ef6c00',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },

      contrastThreshold: 3,

      tonalOffset: 0.2,
    },
  });

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <BookTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 50 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontSize: 25,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Fit-Tech
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
                  {pages.map((page) => (
                    <MenuItem key={page.name} href={page.url} onClick={handleCloseNavMenu} >
                      <Link to={page.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <BookTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
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
                Fit-Tech
              </Typography>
              <Box sx={{ mr: 6, flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    href={page.url}
                    sx={{ ml: 4, my: 2, color: 'white', display: 'block', fontSize: 16 }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>

    </div>
  );
}
export { MenuBarContact };