import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Box, Text } from '@chakra-ui/react';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Main/>
       <Text>Copyright 2023 © Cuba theme by pixelstrap</Text>
    </div>
  );
}

export default App;
