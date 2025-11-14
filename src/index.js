import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { router } from './lib/Routes';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './lib/Theme';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <RouterProvider router={router}>        
        <App />
        <SpeedInsights/>
        <Analytics/>
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);