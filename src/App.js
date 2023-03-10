import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/Admin"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AlreadyAuth from "./components/AlreadyAuth";
import AlreadyAdmin from "./components/AlreadyAdmin";
import CartPage from "./pages/CartPage";
import CartProvider from "./CartContext";
import SuccessPay from "./components/Success.pay"
import ErrorPay from "./components/Error.pay";
import AlreadyLogIn from "./components/alreadyLogIn";

function App() {
 

  
  return (

  <CartProvider>  
    <BrowserRouter>
    <Routes>
      < Route path="/cancel" element={  <AlreadyLogIn><ErrorPay /></AlreadyLogIn> }/>
      < Route path="/success" element={ <AlreadyLogIn><SuccessPay /></AlreadyLogIn> }/>
      < Route path="/cart" element={ <AlreadyLogIn><CartPage /></AlreadyLogIn> }/>
      < Route path="/login" element={<AlreadyAuth><Login /></AlreadyAuth> }/>
      < Route path="/signup" element={<AlreadyAuth><Signup /></AlreadyAuth> }/>
      < Route path="/" element={ <Home /> }/>
      < Route path="/inputs" element={ <AlreadyAdmin><Admin /></AlreadyAdmin> }/>
    </Routes>
    </BrowserRouter>
  </CartProvider>  
  );
}

export default App;
