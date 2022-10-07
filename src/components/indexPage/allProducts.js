import { useEffect, useState } from 'react';
import { getProducts } from '../api/productApi';
import { ProductCard } from './productCard';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data)
      setIsLoaded(true)
    })
  }, []);

  return (
    <div className="container">
      {!isLoaded ? <h4 className='text-center mt-5'>Loading...</h4> :
        <div>
          <h1 className="text-center mt-5">Products</h1>
          <div className="row justify-content-center text-center" id="products-div">
            {products.map((product) => {
              return <ProductCard product={product} key={product.id} />
            })}
          </div>
        </div>
      }
    </div>
  );
}

export { AllProducts };
