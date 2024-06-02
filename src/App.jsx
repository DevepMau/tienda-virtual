import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import ShoppingCart from './pages/ShoppingCart';
import ShoppingCartProvider from './contexts/ShoppingCartContext';

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
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
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
