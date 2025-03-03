// using axios 
import axios from 'axios' ;

const API_URL = 'http://localhostl:8000' ; 

const axiosInstance = axios.create({
    baseURL: API_URL, 
    timeout: 10000,
    headers:{
        "Content-Type":"application.json"
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function(error){
        return Promise.reject(error) ;
    }
)

axiosInstance.interceptors.response.use(
    function(response){},
    function(error)
)