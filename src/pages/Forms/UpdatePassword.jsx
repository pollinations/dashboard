import SimpleForm from "../../components/SimpleForm";
import { BackGroundVideo } from '../../styles/global';
import { useNavigate } from "react-router-dom";
import React from "react";
import { updatePassword } from "../../supabase/user";

export default function UpdatePassword(){

    const [ err, setErr ] = React.useState('')
    const newPasswordRef = React.useRef();
    const newPasswordConfirmRef = React.useRef();
    const navigate = useNavigate()

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

    return <>
        <SimpleForm {...UpdatePasswordProps} />
        <BackGroundVideo
        loop
        opacity='50%'
        autoPlay
        muted 
        position='fixed'
        src='https://pollinations.ai/dreamachine/dreamachine_00.mp4'
        top='0'
        zIndex='-1' 
        alt="background-image" 
    />
    </>
}