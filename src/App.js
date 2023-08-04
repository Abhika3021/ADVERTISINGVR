import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
<<<<<<< HEAD
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> origin/master
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='/services' element={<Services /> }></Route>
          <Route path='/contact-us' element={<ContactUs /> }></Route>
        </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
