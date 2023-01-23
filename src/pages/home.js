import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/Navbar";
import Cards from "../components/Cards";
import Slider from "../components/slider";
import Footer from "../components/Footer";
import Offer from "../components/Offer";
import Onloading from "../components/onLoading";
import Cart from "../components/Cart";
import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

function Home() {
  const [loading, setLoading] = useState(false);
  window.scrollTo(0, 0);
  const [personsData, changedData] = useState([]);
  const fetchData = async () => {
    try {
      setLoading(true);
      await fetch("https://am-restaurant-backend.onrender.com/api/products", {
        method: "GET",
      })
        .then((data) => data.json())
        .then((persons) => {
          changedData(persons.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className="loading">
            <CircleLoader
              color={"red"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <>
          <div className="CartFlow">
            <Cart />
          </div>
          <div>
            <NavBar />
            <Slider />
            <Offer />
            <Cards data={personsData} />
            <Footer />
          </div>
        </>
      )}
      <Onloading />
    </div>
  );
}

export default Home;
