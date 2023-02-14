import SimpleForm from "../../components/SimpleForm";
import { signInWithEmail } from '../../supabase/user'
import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/atoms/PasswordInput";
import { useAuth } from "../../hooks/useAuth";

export default function LoginPage(){

const [ err, setErr ] = React.useState('')
const usernameRef = React.useRef()
const passwordRef = React.useRef()
const navigate = useNavigate()
const { user } = useAuth()


async function onSubmit(e){
    e.preventDefault()
    // Clear error field
    setErr('')

    // handleSignIn
    let { data, error } = await signInWithEmail({
        username: usernameRef.current.value,
        password: passwordRef.current.value
    });

    // Success
    if (data?.user !== null) navigate('/d');
    // Fail
    if (error) setErr(error.message);
}
const LoginProps = {
    title: 'Sign In',
    onSubmit,
    fields: [ 
      { inputRef: usernameRef, label: 'Email', type: 'email', autoComplete:"username" },
      { 
        component: <PasswordInput inputRef={passwordRef} label='Password' key='Password' autoComplete="current-password" />
      }
    ],
    err,
}

if (user) return <Navigate to='/d'/>

return <>
    <SimpleForm {...LoginProps} />
</>
}