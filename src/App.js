import logo from './logo.svg';
import './App.css';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TireSone from "./pages/TireSone";
import Products from "./pages/Products";
import Promotions from "./pages/Promotions";
import NewsEvents from "./pages/NewsEvents";
import SafetyTips from "./pages/SafetyTips";
import FAQs from "./pages/FAQs";
import Location from "./pages/Location";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>

        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<TireSone />} />
            <Route path="/products" element={<Products />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/safety-tips" element={<SafetyTips />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>

  );
}

export default App;
