import logo from './logo.svg';
import './App.css';
import {Navbar}  from './Component/Nav';
import { Box, ColorSchemeProvider, MantineProvider ,Button, Text, Group} from '@mantine/core';
import { useState } from 'react';
import Main from './Component/Main';
import { NavbarNested } from './Component/Navbar';
import {BiSolidUpArrow} from 'react-icons/bi'
function App() {
  const [show,setshow]=useState(true)
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (ColorScheme) =>
    setColorScheme((colorScheme === 'dark' ? 'light' : 'dark'));
    function addshow(){
      setshow(!show)
     }
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <Box pos={'relative'} className="App">
    <Navbar show={show} addshow={addshow}/>
    <NavbarNested show={show} addshow={addshow} />
    <Main/>
    <Box id='Scrbutton'>
    <BiSolidUpArrow size={60} onClick={() =>  window.scrollTo({ top: 0, behavior: 'smooth' })}/>
    </Box>
    </Box>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
