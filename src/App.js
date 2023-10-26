import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import Order from "./Order";
import Confirmation from "./Confirmation";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/reservations" element={<BookingPage />} />

        <Route path="/order" element={<Order />} />

        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
