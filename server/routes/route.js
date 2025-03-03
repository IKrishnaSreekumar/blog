// route is api end point 
import express from 'express' ;
import { signupUser } from '../controller/user-controller.js';

const router = express.Router() ;
// function 

// end points change for functionalities 
// http reqs
router.post('/signup', signupUser) ; 
// signup api so end point
// the function is imported to maintain the readability

// post request on the signup api calls the function signupUser



export default router ; 