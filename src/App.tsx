import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import Routes from './routes/Routes'

function App() {
  return (  
    <Router>
      <ChakraProvider>
      <div>
        <Routes />
      </div>

      </ChakraProvider>
  </Router>
  );
}

export default App;

