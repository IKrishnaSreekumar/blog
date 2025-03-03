// entry point and main file of backend 
import express from 'express' ;
import dotenv from 'dotenv' ; 
import Connection from './database/db.js' ; 
import router from './routes/route.js';

dotenv.config();

const app = express() ; 

app.use('/', router) ;
// the app calls the function router which acts as the middleware for all 
// request processing 

const PORT = 8000 ; 

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`)) ; 
// second arg is callback function
// action to perform on running server 

// dev dependency nodemon to run automatically 
const USERNAME = process.env.DB_USERNAME ;
// to take anything from env file 
const PASSWORD = process.env.DB_PASSWORD ; 
Connection(USERNAME, PASSWORD) ;