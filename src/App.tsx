import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Typography, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar
        appBarProps={{ color: 'primary', elevation: 2 }}
        toolbarProps={{ sx: { justifyContent: 'space-between' } }}
        containerProps={{ sx: { px: 2 } }}
      >
        <Typography variant="h6" component="div">
          My App
        </Typography>
        <Button color="inherit" href="https://reactjs.org" target="_blank">
          Learn React
        </Button>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
