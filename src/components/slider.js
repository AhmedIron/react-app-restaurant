import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <div className="MainSlider">
    <Carousel controls={false} indicators={false} interval={2000}>

      <Carousel.Item className="boxz">
        <img
          className="d-block w-100 imgz"
          src="/qqq.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className="boxz">
        <img
          className="d-block w-100 imgz"
          src="/food77.png"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="boxz">
        <img
          className="d-block w-100 imgz"
          src="/uuu.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
  
}

export default Slider;
