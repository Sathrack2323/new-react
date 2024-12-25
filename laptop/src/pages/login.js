import Paper from '@mui/material/Paper';
import { Typography,TextField,Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const Login=()=>{
   
        //login function
         const [user,setuser]=useState({"email":"", "password":""})
         console.log(user)
         const handlechange=(event)=>{
          setuser({...user,email:event.target});
          if(event.target.name ==='username'){
            setuser({...user,username:event.target.value})
         }
          if(event.target.name ==='email'){
             setuser({...user,email:event.target.value})
          }
          if(event.target.name ==='password'){
            setuser({...user,password:event.target.value})
         }
        }
        const handlelogin=()=>{
          axios.post('http://localhost:3001/login',JSON.stringify (user),
          { headers:{' Content-Type':"application/json"}})
             .then((res)=>{console.log(res.data)})
          .catch((err)=>{console.log(err)})
          
        } 
        
    return (
        <div style={{width:'100%',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'yellow'
        }}>
     
           <Paper   sx={{
           display: 'flex',
           flexDirection:'column',
           padding:'10px',
           borderRadius:'20px',
           fontSize:'10px',
           alignItems:'center',
           gap:'10px',
             width: '350px',
             height: '70vh',  }}elevation={12}> 

           <h1>logiggn </h1> 
           <Typography  sx={{  display: 'flex',
           flexDirection:'column', gap:'10px',width:'100%'}}>
             <TextField  id="username" name="username" type="username" label="username"  variant="outlined"  onChange={(event)=>handlechange(event)} fullWidth />
          <TextField 
           id="email" label="email" name="email" variant="outlined"  onChange={(event)=>handlechange(event)} />
         <TextField id="password" name="password" type="password" label="password"  variant="outlined"  onChange={(event)=>handlechange(event)} fullWidth />
         </Typography>
         <Typography sx={{letterSpacing:"1px",textAlign:'end'}}>
         <a href='' >forget password</a>
         </Typography>
         <Typography
         sx={{  display: 'flex',
         justifyContent:'center',
           flexDirection:'row',gap:'10px',margin:'10px', width:'100%'}}>
         <Button variant="outlined">sign up</Button>
         {/* <a href='/dashboard' variant="contained" color="success" > login
         </a> */}
           <Button variant="outlined" onClick={handlelogin}>login</Button>
         </Typography>
         <Typography sx={{letterSpacing:"1px"}}>
         <a href='/register' >new account?</a>
         </Typography>
         </Paper>
        
        </div>
    );
}
 
export default Login;