const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser=require('body-parser');// body parser => means by json file  convert to objct fille
app.use(cors({orgin:'*'}));//cross wbsite came you do allowed
app.listen(3001,()=>{
    console.log('server is running on port  3001')
});

app.use (bodyParser.json());

app.get('/',(req,res)=>{
    res.send('hello from server');
})

app.get('/user',(req,res)=>{
    const user=[{name:'rock',age:323},{name:'jhon',age:32}];
    res.send(user);
})
app.post('/login',(req,res)=>{ //integration of front end
    const {email,password}=req.body; //desturcuting  array (.method)
    console.log(email,password)
    if(email==='admin' && password==='admin'){
        res.send({message:'loginsucces'})// send the mesg frontend
    }
    else{
        res.send({message:'inavalid email or password'});
    }
});

