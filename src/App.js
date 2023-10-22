import './App.css'; 
// import ReactDOM from "react-dom/client";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Pages/Layout';
import Contact from './Pages/Contact';
import Products from './Pages/products';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       
         <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products/>}/>
          <Route path='about' element={<About />} />
          <Route path='contact'element={<Contact/>}/>
          </Route>
          </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
