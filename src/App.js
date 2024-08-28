import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Form from "./Components/Form";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
