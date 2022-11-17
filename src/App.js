import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from "./components/Navbar"
import Header from "./components/Header"
import Category from './components/category';
import Cards from './components/Cards';

function App() {
  return (
    <div>

              <NavBar />
      <Container>
        <Header />
        <Category />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

      </Container>
    </div>
  );
}

export default App;
