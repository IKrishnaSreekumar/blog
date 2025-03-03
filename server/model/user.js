import mongoose from 'mongoose' ; 

// make schema using mongoose 

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        required: true, 
        unique: true 
    }, 
    password: {
        type: String, 
        required: true 
    }
})

// which db should have this schema 

const user = mongoose.model('user', userSchema); 

export default user ; 