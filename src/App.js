import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Products from './component/Products';
import Cart from './component/Cart';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/'   element={<>
          <Products/>
          <Footer/>
        
        </>}       />
        <Route path='cart'   element={<Cart/>}       />


      </Routes>

    </div>
  );
}

export default App;
