import SimpleForm from "../../components/SimpleForm";
import { BackGroundVideo, Colors } from '../../styles/global';
import { Navigate, useNavigate } from "react-router-dom";
import React from "react";
import { updatePassword } from "../../supabase/user";
import SimpleInfo from "../../components/SimpleInfo";
import styled from '@emotion/styled'
import { useAuth } from "../../hooks/useAuth";

export default function ConfirmEmail(){

    const [ err, setErr ] = React.useState('')
    const newPasswordRef = React.useRef();
    const newPasswordConfirmRef = React.useRef();
    const navigate = useNavigate()
    const { user } = useAuth()

    async function onSubmit(e){
        e.preventDefault()
        // Clear error field
        setErr('')

        if (newPasswordRef.current.value !== newPasswordConfirmRef.current.value) return setErr('Passwords are not the same.');

        // handleSignIn
        let { data, error } = await updatePassword(newPasswordRef.current.value);
        // Success
        if (data.user !== null) navigate('/d');
        // Fail
        if (error?.message) setErr(error?.message);
    }

    const UpdatePasswordProps = {
        title:'Update Password',
        onSubmit,
        fields: [
            { inputRef: newPasswordRef, label: 'New Password', type: 'password' },
            { inputRef: newPasswordConfirmRef, label: 'New Password Confirm', type: 'password' },
        ],
        err,
    }
    if (user) return <Navigate to='/d'/>
    return <HeaderStyle>
        <SimpleInfo 
            title='Almost there'
            body='Thanks for signing up! Please check your email and confirm your account to start using our service. If you need any assistance, feel free to contact our support team.'
        />
         
    </HeaderStyle>
}
const HeaderStyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;
`