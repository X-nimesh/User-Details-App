import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Theme.js';
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from './ThemeContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider>


      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>

    </ThemeProvider >
  </BrowserRouter>
);

