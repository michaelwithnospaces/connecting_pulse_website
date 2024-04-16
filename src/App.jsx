import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './Pages/cart';
import { Advocacy } from './Pages/advocacy';
import { Contact } from './Pages/contact';
import { Research } from './Pages/research';
import { Landing } from './Pages/landing';
import { Education } from './Pages/education';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/advocacy" element={<Advocacy/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/research" element={<Research/>}/>
      </Routes>
    </Router>
  )
}

export default App;
