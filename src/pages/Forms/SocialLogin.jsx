import SimpleForm from "../../components/SimpleForm";
import { handleSocialLogin, signInWithEmail } from '../../supabase/user'
import React from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PasswordInput from "../../components/atoms/PasswordInput";
import { useAuth } from "../../hooks/useAuth";
import { SocialLinks } from "../../components/Social";
import Button from '../../components/Button'
export default function SocialLoginPage(){

const [ err, setErr ] = React.useState('')
const navigate = useNavigate()
const { user } = useAuth()

// check if redirectTo param is present
const { redirect } = useParams()



const SocialProviders = [
    {
        id: 'discord',
        label: 'Discord'
    },
    {
        id: 'google',
        label: 'Google'
    },
    {
        id: 'github',
        label: 'Github'
    }
]
async function handleLogin(e, provider){

    e.preventDefault()
    console.log(provider)

    // Clear error field
    setErr('')

    // handleSignIn
    let { data, error } = await handleSocialLogin(provider, redirect);
    console.log(data, error)
    // Success
    // if (data?.user !== null) navigate('/d');
    // Fail
    // if (error) setErr(error.message);
}
const LoginProps = {
    title: 'Sign In',
    fields: SocialProviders.map( provider => ({
        component: <Button key={provider.id} children={provider.label} outlined onClick={(e) => handleLogin(e, provider.id)}/>
    })),
    err,
    // extras: <SocialLogin/>
}

if (user) return <Navigate to='/d'/>

return <>
    <SimpleForm {...LoginProps} />
</>
}



const SOCIAL_LINKS = {
    discord: {
      label: 'Discord',
      icon_img: 'DiscordLogo',
      url: 'https://discord.gg/8HqSRhJVxn',
    },
    github: {
      label: 'GitHub',
      icon_img: 'GithubLogo',
      url: 'https://www.github.com/pollinations'
    },
  }