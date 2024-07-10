
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header';
import Shop from './components/ShopPage';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
