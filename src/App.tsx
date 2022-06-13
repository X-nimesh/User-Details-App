import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Main from './components/Main';
import { Routes, Route, Link } from "react-router-dom";
import UserDetails from './components/UserDetails';
function App() {

  return (
    <Flex className="App" w='100vw' pt={'20px'} bg='bg' minH={'100vh'} direction='column'
      align='center'
    >
      <Flex m='50px auto' direction={'column'} align='center' gap={'10px'}>
        < Heading size={'2xl'} > Pagination</ Heading>
        <Box h='5px' w='140px' bg='blue1'>
        </Box>
      </Flex >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:id" element={<UserDetails />} />

      </Routes>


    </Flex >
  );
}

export default App;
