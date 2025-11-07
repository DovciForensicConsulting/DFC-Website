import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { router } from './lib/Routes';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './lib/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);