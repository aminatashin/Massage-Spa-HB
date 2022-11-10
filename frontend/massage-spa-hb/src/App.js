import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
