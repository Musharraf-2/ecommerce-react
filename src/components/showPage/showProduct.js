import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Comment } from './comment';
import './style/showProduct.css'

function ShowProduct() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios.get(`http://localhost:3000/api/v1/products/${params.id}.json`)
      .then(resp => {
        setProduct(resp.data.product);
      })
      .catch(err => {
        console.error(err);
      });
  }

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
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner text-center h-50">
              <div className="carousel-item active">
                {product.images_path && <img src={product.images_path[0].image_path} alt={product.title} className="d-block w-100 c-image" />}
              </div>
              {product.images_path && product.images_path.slice(1).map((image) => {
                return (<div className="carousel-item" key={image}>
                  <img src={image.image_path} alt={product.title} className="d-block w-100 c-image" />
                </div>)
              })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
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
