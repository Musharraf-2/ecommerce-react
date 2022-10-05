import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Ecommerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Wishlist</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Product Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Signup</Link>
            </li>
          </ul>
          <div>
            <input className="form-control" placeholder="Search products" type={"text"} />
            <div id="search" className="my-3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
