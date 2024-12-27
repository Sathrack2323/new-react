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
import { Link,Paper,Box,Typography,Button,Input,Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function App(){
 

    return(
 
     <BrowserRouter >
     <div>
     <Paper elevation={0} sx={{display:'flex',height:'30px',
      alignItems:'center',padding:'10px',width:"100%",
       justifyContent:'space-between'}}>
        <Typography >
          <h1>TECH-World</h1>
        </Typography  >
        <Box>
        <Typography sx={{display:'flex',gap:'20px',width:'100%',alignItems:'center'}}>
        <Button variant="outlined">home</Button>
        <Button  variant="outlined" >  product</Button>
        <Button variant="outlined">about</Button>
        <Button variant="outlined">contact</Button>
        <Button variant="outlined"> <Link href="/login"  underline="hover" color="red" >login</Link></Button>
        </Typography>
        </Box>
        </Paper>
        <Paper elevation={0}>  
          <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center",padding:"5px",height:"40px"}}>
            <Box>
            <MenuIcon/>
            </Box>
            <Box sx={{width:"70%"}}>
            <Input disableUnderline  sx={{padding:"5px",margin:"10px",border:"1px solid gray",height:"40px",width:"60%"}} placeholder="search"/>
           <Button  endIcon={<SearchIcon/>}  sx={{height:"40px",border:"1px solid gray"}}></Button>
           </Box>
           <Box sx={{display:"flex",gap:"20px",alignItems:"center"}}>
            <NotificationsActiveIcon/>
            <ShoppingCartIcon/>
            <Avatar alt="Remy Sharp" src={require('./component/30.jpg')} />
           </Box>
          </Box>
        </Paper>
     </div>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/register"element={<Register/>}/>
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
 