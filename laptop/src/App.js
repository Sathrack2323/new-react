import{BrowserRouter,Routes,Route}from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Hp from "./pages/hp";
import Dell from "./pages/dell";
import Deliver from "./pages/deliver";
import Payment from "./pages/payment";
import Cart from "./pages/cart";
import About from "./pages/about";
import { Link } from "@mui/material";

function App(){

    return(
     <BrowserRouter >
     <Routes>
      <Route path="/login"element={<Login/>}/>
      <Route path="/register"element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/hp" element={<Hp/>}/>
      <Route path="/dell" element={<Dell/>}/>
      <Route path="/deliver" element={<Deliver/>}/>
      <Route path="/Paymentent" element={<Payment/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/about" element={<About/>}/>
       </Routes>
     </BrowserRouter>
 );
}

export default App;
 