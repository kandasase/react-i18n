import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import "./i18n";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </ChakraProvider>
);


