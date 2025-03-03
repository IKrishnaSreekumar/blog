import user from "../model/user.js";

// api is called 
export const signupUser = async(request, response) =>{
    // request fields is the frontend sending reqs to backend
    // api url, api headers, content to be said, what is to be retrieved
    try{
        // object sent inside body 
        const user = request.body;
        // request is object for which body is key 
        // authentication required 
        // example : name field is required and should be string 
        // make schema 

        // store in db 
        const newUser = new User(user) ;
        await newUser.save() ;
        // save the object in db 
        // async request 

        return response.status(200).json({msg: 'signup successful'})
        // to send frontend 
    } catch(error){
        // exception handling
        return response.status(500).json({msg:'error while signup of new user'})
    }
}