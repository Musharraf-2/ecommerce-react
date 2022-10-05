import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <div className="col-4 my-3">
      <div className="card">
        <img src={props.product.image_path} alt={props.product.title} />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">Price: {props.product.price}$</p>
          <div className="d-flex flex-row justify-content-center">
            {props.product.quantity > 0 ? <button className=" btn btn-primary p-2 rounded mx-2">Add to Cart</button>
              : <p className="text-danger m-2">Currently out of stock.</p>}
            <Link to={`/products/${props.product.id}`} className='btn btn-secondary p-2 rounded mx-2'>Show Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
