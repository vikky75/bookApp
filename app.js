const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');               //Part #1 Point 1(package.json-main:app.js)
const bodyParser = require('body-parser'); //Part #1 Point 2

const nav = require('./src/data/nav'); //Part #2 Point 6
const PORT = process.env.PORT || 5000;

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute'); //Part #1 Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 
app.use(cors()); //Part #2 Point 7

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(PORT,()=>{
    console.log("Server Ready on port: " + PORT); //Part #1 Point 5
});