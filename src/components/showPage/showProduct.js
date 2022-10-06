import axios from 'axios';
import { Carousel } from './carousel';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Comment } from './comment';

function ShowProduct() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = () => {
      axios.get(`http://localhost:3000/api/v1/products/${params.id}.json`)
        .then(resp => {
          setProduct(resp.data.product);
        })
        .catch(err => {
          console.error(err);
        });
    }
    getProduct();
  }, [params.id]);

  return (
    <div className="container mt-5">
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
  );
}

export { ShowProduct };
