// state 
import {useState} from 'react' ; 


import {Box, TextField, Button, styled, Typography, autocompleteClasses} from '@mui/material' ; 

import { ReactComponent as Svg } from './coconut.svg';

const Component = styled(Box)`
    width: 600px; 
    margin: auto ; 
    box-shadow: 5px 2px 5px 2px rgb(0.3 0.2 0.4/0.2) ; 
    height: 850px ; 
`


// width: 500,
//     margin: 'auto',
//     display: 'flex', 
//     padding: '0 0'
// to pass an html element in string
// then parenthesis and css inside (camelcase style)

// the auto and flex has to be in ' ' cause they are strings 
// the , in objects and the auto works with flex 

const Wrapper = styled(Box)`
    padding: 25px 35px; 
    display: flex ; 
    margin: auto ; 
    flex: 1 ; 
    flex-direction: column ; 
    width: 400px ; 
    & > div, & > button, &>p {
        margin-top: 20px; 
    }
`
// internally text field is div element in html 
// the mui element for button is internally html button 
//  & > to get the children elems 

const LoginButton = styled(Button)`
    text-transform: none ; 
    background: #966fd6 ; 
    height: 48px ; 
    border-radius: 5px ;
    font-size: 18px 
`
const SignUpButton = styled(Button)`
    text-transform: none ; 
    height: 48px ; 
    border-radius: 5px ;
    font-size: 18px ; 
    color:rgb(71, 12, 120) ; 
    box-shadow: 0 2px 4px 0 rgb( 0 0 0 /20%)
`
const Text = styled(Typography)`
    color: rgb(20, 17, 23) ; 
    font-size: 16px ; 
`

const SignUpButtonNonDefault = styled(Button)`
text-transform: none ; 
    height: 48px ; 
    border-radius: 5px ;
    font-size: 18px ; 
    color:rgb(71, 12, 120) ; 
    box-shadow: 0 2px 4px 0 rgb( 0 0 0 /20%) ;
`
const LoginButtonNonDefault = styled(Button)`
    text-transform: none ; 
    background: #966fd6 ; 
    height: 48px ; 
    border-radius: 5px ;
    font-size: 18px ; 
    color: #ffffff ; 

`
const signupInitialValues = {
    name: '' , 
    username: '' , 
    password: ''
}
// object to be sent to backend


const Login = () => {
    const imageURL = require('./coconut.png') ;

    const [account, toggleAccount] = useState('login') ; 
    const [signup, setSignup] = useState(signupInitialValues) ;

    const toggleSignup = () => {
        toggleAccount('signup') ;
    }

    const toggleLogin = () => {
        toggleAccount('login') ;
    }

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value}) ;
    }
    // spreading the existing values in the signup fields 
    // e.target.name will act as a key to fill the value in the dict 

    const signupUser = () =>{
        
    }

    return (
        <Component>
            <Box>
                
                <Svg
                width="500"
                style={{
                    margin:'-80px auto',
                    display: 'flex',
                    padding:'0'
                }}
                ></Svg>
                {
                account === 'login' ?

                    <Wrapper>
                        <TextField variant="standard" label="Enter username"/>
                        <TextField variant="standard" label="Enter password"/>
                        <LoginButton variant="contained">Login</LoginButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <SignUpButton onClick={() => toggleSignup()}>Create an account</SignUpButton>
                    </Wrapper> 
                    :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter name"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter username"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter password"/>
                        <LoginButtonNonDefault variant="contained" onclick={()=>signupUser()}>Sign Up</LoginButtonNonDefault>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <SignUpButtonNonDefault onClick={()=>toggleLogin()}>Already have an account</SignUpButtonNonDefault>
                    </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login 