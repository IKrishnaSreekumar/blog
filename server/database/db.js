import mongoose from 'mongoose' ;


// to connext to db
// need library cant connect directly from express
// mongodb lib or mongoose 


const Connection = async(username, password) => {
const URL = `mongodb+srv://${username}:${password}@blog.qkunv.mongodb.net/?retryWrites=true&w=majority&appName=blog` ; 
    try{
        await mongoose.connect(URL, { useNewUrlParser: true }) ;
        // two args, connection string : url 
        // earlier parser deprecates
        // parse the new url 
        // asyn function , returns promise and hence await 
        console.log('Db connected successfully') ; 
    } catch(error){
        console.log('error while connecting with the db', error) ; 
    }
}

export default Connection ; 