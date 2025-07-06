import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            sx={{ textDecoration: 'none' }}
          >
            Login
          </Button>
           <Button 
            color="inherit" 
            component={Link} 
            to="/a"
            sx={{ textDecoration: 'none' }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;