import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import EditContact from "./pages/EditContact";
import CreateContact from "./pages/CreateContact";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/contacts" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="create_contact" element={<CreateContact />} />
            <Route path="edit_contact/:contact_id" element={<EditContact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
