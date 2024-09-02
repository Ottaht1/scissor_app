import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import GetAQuotePage from "./pages/GetAQuotePage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/src/pages/GetAQuotePage.jsx"
          element={<GetAQuotePage />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
