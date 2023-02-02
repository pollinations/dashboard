import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../../supabase/user';

export default function useUpdatePassword() {
  const [ err, setErr ] = React.useState('')
  const newPasswordRef = React.useRef();
  const newPasswordConfirmRef = React.useRef();
  const navigate = useNavigate()

  async function onSubmit(e){
    e.preventDefault()
    // Clear error field
    setErr({})

    // handleSignIn
    let { data, error } = await updatePassword(newPasswordRef.current.value);
    // Success
    console.log(data, error)
    if (data.user !== null) navigate('/d');
    // Fail
    if (error?.message) navigate('/d') // setErr(error);
}

  return {
    onSubmit,
    fields: [
        { inputRef: newPasswordRef, label: 'New Password', type: 'password' },
        { inputRef: newPasswordConfirmRef, label: 'New Password Confirm', type: 'password' },
    ],
    err,
  };
}