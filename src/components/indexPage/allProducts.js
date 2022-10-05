import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCard } from './productCard';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get('http://localhost:3000/api/v1/products.json')
      .then(resp => {
        setProducts(resp.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Products</h1>
      <div className="row justify-content-center text-center" id="products-div">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />
        })}
      </div>
    </div>
  );
}

export { AllProducts };
