import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import { } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{background:'steelblue'}} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Product App
        </Typography>
        <Link style={{color:"white"}} to={'/'}><Button color="inherit">HOME</Button></Link>
        <Link style={{color:"white"}} to={'/Add'}><Button color="inherit">ADD</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
 

    
  )
}

export default Navbar