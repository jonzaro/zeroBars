import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ContactUs } from "./pages/ContactUs";
import { ProductDetail } from "./pages/ProductDetail";
import { Terms } from "./pages/Terms";
// import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/:id" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />

            {/* <Route path="/about-us/" element={<AboutUs />} /> */}
          </Routes>
        </main>
      </div>
      1
    </Router>
  );
}

export default App;
