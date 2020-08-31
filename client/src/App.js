import React from 'react';
import Menu from './components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  
  return (
    <div>
      <Router>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
