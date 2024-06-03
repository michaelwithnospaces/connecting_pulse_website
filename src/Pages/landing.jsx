import '../App.css';
import Home from "../Components/Who";
import Product from '../Components/Education';
import Work from '../Components/Research';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer'
import Advocacy from '../Components/Advocacy'
import Partners from '../Components/Partners'

export function Landing() {
  return (
    <div className="App">
        <Home/>
        <Product/>
        <Advocacy/>
        <Work/>
        <Contact/>
        <Partners/>
        <Footer/>
    </div>
  );
}
