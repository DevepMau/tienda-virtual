import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/productos' element={<ItemList />}  />
            <Route path='carrito' element={<ShoppingCart />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
