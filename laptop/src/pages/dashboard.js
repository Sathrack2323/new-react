import { Button, Paper, Typography,Link, Box, Container, Input, Avatar,Grid } from "@mui/material"
import {MenuItem} from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';


const Dashboard=()=>{
const val=[{
  value:'hlo',
  label:'hlk'
}]

  return(
    <Container  maxWidth="xl"  sx={{}}>
    <div style={{width:'100%',height:'100vh',width:"45px"}}>
      
      <Paper elevation={0} sx={{display:'flex',height:'30px',
      alignItems:'center',padding:'10px',width:"100%",
       justifyContent:'space-between'}}>
        <Typography >
          <h1>TECH-World</h1>
        </Typography  >
        <Box>
        <Typography sx={{display:'flex',gap:'20px',width:'100%',alignItems:'center'}}>
        <Button variant="outlined">home</Button>
        <Button  variant="outlined">  product</Button>
        <Button disableRipple variant="outlined">
        <select sx={{border:"none"}}>
          <option value="car">Dell</option>
          <option value="car">Mac</option>
          <option value="car">Hp</option>
          <option value="car">Lenovo</option>
        </select>
        </Button>
        <Button variant="outlined">about</Button>
        <Button variant="outlined">contuct</Button>
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
            <Avatar alt="Remy Sharp" src={require('../component/30.jpg')} />
           </Box>
          </Box>
        </Paper>

        <Paper sx={{margin:"10px",display:"flex"}} elevation={0}>
          <Paper sx={{display:"",visibility:"",width:"350px",textAlign:"center"}}>
            <Button>Dell</Button>
            <br/>
            <Button>Hp</Button>
            <br/>
            <Button>Mac</Button>
            <br/>
            <Button>Lenovo</Button>
            <br/>
            <h1>ensure....</h1>
            <Button>Addres</Button>
            <br/>
            <Button>Account</Button>
            <br/>
            <Button>privavcy</Button>
            <br/>
            <Button>service</Button>
            </Paper>
      
         <Box sx={{width:"100%",borderRadius:"20px"}}>
          <img src={require('../component/29.jpg')} width="600px" height="450px" sx={{borderRadius:"20px"}} ></img>
          </Box>
          <Box sx={{flexGrow:1}}>
          <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
          <img src={require('../component/22.jpg')} width="200px" height="150px" ></img>
          </Grid>
          <Grid item xs={6}>
          <img src={require('../component/21.jpg')} width="200px" height="150px" ></img>
          </Grid>
          <Grid item xs={6}>
          <img src={require('../component/12.png')} width="200px" height="150px" ></img>
          </Grid>
          <Grid item xs={6}>
          <img src={require('../component/1.jpg')} width="200px" height="150px" ></img>
          </Grid>
          </Grid>
          </Box>
        </Paper>

     
    </div>
    </Container>
  );
  };
  
  export default Dashboard;