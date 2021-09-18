import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import Routes from './routes/Routes'

function App() {
  return (  
    <Router>
      <ChakraProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Routes />
      </div>

      </ChakraProvider>
  </Router>
  );
}

export default App;

