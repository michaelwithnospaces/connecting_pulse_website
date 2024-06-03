import '../App.css';
import Home from "../Components/Who";
import Product from '../Components/Education';
import Work from '../Components/Research';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer'
import Advocacy from '../Components/Advocacy'

export function Landing() {
  return (
    <div className="App">
        <Home/>
        <Product/>
        <Advocacy/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>
  );
}
