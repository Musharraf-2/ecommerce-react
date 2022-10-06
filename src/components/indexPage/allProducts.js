import { useEffect, useState } from 'react';
import { getProducts } from '../api/productApi';
import { ProductCard } from './productCard';

function AllProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data)
    })
  }, []);

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
