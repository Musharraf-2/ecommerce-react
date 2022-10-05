import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ShowProduct } from './components/showPage/showProduct';
import { AllProducts } from './components/indexPage/allProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar } from './layout/navbar';
import { PageNotFound } from './components/errors/pageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AllProducts />} />
        <Route exact path="products/:id" element={<ShowProduct />} />
        <Route exact path="products/:id" element={<ShowProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
