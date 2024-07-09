
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import'./components/Home.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

// Example Home element (replace with your actual Home element)
const Home = () => (
  <div>
    <h2>Welcome to our React E-commerce Store</h2>
    <p>Explore our products and start shopping!</p>
  </div>
);

export default App;
