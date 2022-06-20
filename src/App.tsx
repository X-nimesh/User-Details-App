import { Box, Button, Flex, Heading, Image, Spacer } from '@chakra-ui/react';
import './App.css';
import Main from './components/Main';
import { Routes, Route, useNavigate } from "react-router-dom";
import UserDetails from './components/UserDetails';
import Adduser from './components/Adduser';
import { useTheme } from './ThemeContext';
// import { useContext } from 'react';

function App() {
  let { DarkTheme, themeChange }: any = useTheme();
  // const { DarkTheme, setDarkTheme }: any = useContext(ThemeContext);
  // themeChange();
  console.log(DarkTheme);

  let navigate = useNavigate();
  return (

    <Flex className="App" w='100vw' pt={'20px'} bg={DarkTheme ? 'drkbg' : 'bg'} minH={'100vh'} direction='column'
      align='center'
    >
      <Flex w='100%' direction='row' align='center' p='0 50px' >

        <Flex m='50px auto' direction={'column'} align='center' gap={'10px'}
          onClick={() =>
            navigate('/')
          }
          cursor='pointer'
        >
          <Heading size={'2xl'}

          > Pagination</ Heading>
          <Box h='5px' w='140px' bg='blue1'>
          </Box>
        </Flex >
        <Flex width='70px' background={DarkTheme ? '#202124' : 'bg'} borderRadius='10px' mr='10px' p='5px' justify=' center'
          boxShadow='5px 5px 10px rgba(0,0,0,0.2)'
          onClick={() =>
            themeChange()
          }
        >
          <Image src={DarkTheme ? './night.png' : './sun.png'} alt="logo" width='40px' />
        </Flex>
        <Flex>
          <Button bg='blue1' color='white'
            boxShadow='0px 0px 10px rgba(0,0,0,0.2)'
            _hover={{ boxShadow: '5px 5px 10px rgba(0,0,0,0.2)' }}
            onClick={() => {
              navigate('/adduser')
            }}
          >Add user</Button>
        </Flex>
      </Flex>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:id" element={<UserDetails />} />
        <Route path="/adduser" element={<Adduser />} />

      </Routes>


    </Flex >

  );
}

export default App;
