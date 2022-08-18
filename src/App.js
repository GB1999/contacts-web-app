import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import EditContact from "./pages/EditContact";
import CreateContact from "./pages/CreateContact";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create_contact" element={<CreateContact/>}/>
          <Route path="/edit_contact" element={<EditContact/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
