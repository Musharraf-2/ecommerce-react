import { getProduct } from '../api/productApi';
import { Carousel } from './carousel';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Comment } from './comment';

function ShowProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProduct(params.id).then((res) => {
      setProduct(res.data.product)
      setIsLoaded(true)
    })
  }, [params.id]);

  return (
    <div className="container mt-5">
      {!isLoaded ? <h4 className='text-center'>Loading...</h4> :
        <div>
          <h1 className="text-center">{product.title}</h1>
          <strong>Description: </strong>{product.description}<br />
          <strong>Price: </strong>{product.price} $<br />
          <strong>Quantity: </strong>{product.quantity}<br />
          <strong>Serial Number: </strong>{product.serial_number}<br />
          <div className="d-flex flex-row justify-content-center">
            {product.quantity > 0 ? <button className=" btn btn-primary p-2 rounded mx-2 my-4">Add to Cart</button>
              : <p className="text-danger m-2 my-4">Currently out of stock.</p>}
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              {product.images_path && <Carousel images_path={product.images_path} />}
            </div>
          </div>
          <h1 className="text-center my-5">Comments</h1>
          <div className="comments container border p-2 mb-4">
            {product.comments && product.comments.map((comment) => {
              return <Comment comment={comment} key={comment.id} />
            })}
          </div>
        </div>
      }
    </div>
  );
}

export { ShowProduct };
