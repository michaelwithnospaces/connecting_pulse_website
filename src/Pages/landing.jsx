import '../App.css';
import Home from "../Components/Home";
import Product from '../Components/Product';
import Work from '../Components/Work';
// import Testimonial from './Components/Testimonial';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer'

export function Landing() {
  return (
    <div className="App">
        <Home/>
        <Product/>
        <Work/>
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>
    </div>
  );
}
