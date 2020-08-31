import React from 'react';
import Menu from './components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import {
  HashRouter
} from "react-router-dom";
function App() {
  
  return (
    <div>
      <HashRouter>
        <Menu />
      </HashRouter>
    </div>
  );
}

export default App;
