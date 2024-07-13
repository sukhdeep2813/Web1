import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/ubuntu"; 
import { ChakraProvider } from '@chakra-ui/react';
import { Theme } from './Theme/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider Theme = {Theme}>
      <App></App>
    </ChakraProvider>
  </React.StrictMode>,
)
