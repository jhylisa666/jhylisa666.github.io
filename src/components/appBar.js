import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './appBar.scss'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#ecbca4' }}>
        <Toolbar variant = "dense">
        <Button color = "secondary" variant="text">About Me</Button>
        <Button color = "secondary" variant="text">Projects</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
