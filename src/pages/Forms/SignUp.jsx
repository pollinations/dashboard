import SimpleForm from "../../components/SimpleForm";
import React from "react"
import { signUpwithEmail } from '../../supabase/user';
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function SignUpPage(){

const [ err, setErr ] = React.useState('')
const [ success, setSuccess ] = React.useState('')
const usernameRef = React.useRef()
const passwordRef = React.useRef()
const { user } = useAuth()

async function onSubmit(e){
    e.preventDefault()
    // Clear error field
    setErr('')
    
    // handleSignIn
    let { data, error } = await signUpwithEmail({
        username: usernameRef.current.value,
        password: passwordRef.current.value
    });
    // Success
    if (data.user !== null) setSuccess('Confirm your email blabla...')
    // Fail
    setErr(error?.message);
}
const SignUpProps = {
    title: 'Sign Up',
    onSubmit,
    fields: [ 
        { inputRef: usernameRef, label: 'Email', type: 'email' },
        { inputRef: passwordRef, label: 'Password', type: 'password' }
    ],
    err,
    success
}
if (user) return <Navigate to='/d'/>
return <SimpleForm {...SignUpProps}/>
}