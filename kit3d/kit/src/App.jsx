import Home from "./pages/home"
import Product from "./pages/product"
import About from "./pages/about"
import Contact from "./pages/contact"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={ <Product />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} /> 
      </Routes>
    </Router>
    

  )
}

export default App;
