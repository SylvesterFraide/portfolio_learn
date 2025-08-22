import React from "react";
import "./App.css";
import Nabar from "./Component/Navbar/Nabar";
// import { Profile } from './Components/Home/Profile';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./Component/Pages/Home";
import { About} from "./Component/Pages/About";
import { Portfolio } from "./Component/Pages/Portfolio";
import { Clients } from "./Component/Pages/Clients";
// import Navbar from './Components/Header/Navbar';

function App() {
  return (
     <BrowserRouter>
      <Nabar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/clients" element={<Clients />} />
       </Routes>
     </BrowserRouter> 
  );
}

export default App;
