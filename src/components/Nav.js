import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css'

function Nav(props) {
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
          <Link to="/viewtasks" style={{textDecoration: 'none'}} >
          <Typography id='namenav'  >
              Viewtasks
          </Typography>
          </Link>
          <Link to="/"  style={{textDecoration: 'none'}}>
          <Typography id='namenav'  >
              Jokespot
          </Typography>
          </Link>
          <Link to="/login" style={{textDecoration: 'none'}} >
          <Typography id='namenav' >
              Login
          </Typography>
         </Link>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Nav;