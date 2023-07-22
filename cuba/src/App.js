import logo from './logo.svg';
import './App.css';
import {Navbar}  from './Component/Nav';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import Main from './Component/Main';

function App() {
  
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (ColorScheme) =>
    setColorScheme((colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <div className="App">
    <Navbar/>
    {/* <Main/> */}
    </div>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
