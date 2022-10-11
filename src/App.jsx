import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Shoping from "./components/Shoping/Shoping";
import About from "./components/About/About";
import Contact from "./components/Contact_us/Contact";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Header />} />
            <Route path="Shoping" element={<Shoping />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<h2>error</h2>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
