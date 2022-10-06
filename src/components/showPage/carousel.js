import './style/carousel.css'

function Carousel(props) {
  return (<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner text-center h-50">
      <div className="carousel-item active">
        <img src={props.images_path[0].image_path} alt="Product" className="d-block w-100 c-image" />
      </div>
      {props.images_path.slice(1).map((image) => {
        return (<div className="carousel-item" key={image}>
          <img src={image.image_path} alt="Product" className="d-block w-100 c-image" />
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
  </div>);
}

export { Carousel };
