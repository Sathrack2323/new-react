import Paper from '@mui/material/Paper';
import { Typography,TextField,Button } from '@mui/material';

const Register = () => { //functioon arrow =>
         
    return(
       
         <div style={{width:'100%',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        backgroundColor:'whitesmoke'
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
             height: '70vh',
           }}elevation={12}> <h1>sigin </h1> 
           <Typography  sx={{  display: 'flex',
           flexDirection:'column', gap:'10px',width:'100%'}}>
             <TextField id="username" name="username" 
             type="username" label="username"  variant="outlined"  size='small' />
          <TextField 
           id="email" label="email" name="email" variant="filled" size='small' />

         <TextField id="password" name="password" 
         type="password" label="password"  
         variant="outlined"  size='small' />

         <TextField id="confirmpassword" name="confirmpassword"
          type="password" label="confirm password"  
          variant="standard" size='small'  />
         </Typography>
      <Typography
         sx={{  display:'flex',
         justifyContent:'center',
          gap:'20px'}}>
         <Button variant="outlined">sign up</Button>
         <Button variant="contained" color="success">
           login
         </Button>
         </Typography>
         </Paper>
        
        </div>
       
    )

}

export default Register;